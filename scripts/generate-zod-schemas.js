#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Create a hash signature from component props for duplicate detection
function getPropsSignature(componentData) {
  return (componentData.props || [])
    .map(p => `${p.name}:${p.type}`)
    .sort()
    .join('|');
}

// Cache regex for performance
const ARRAY_GENERIC_REGEX = /Array<(.+)>/;

// Helper to extract inner type from array notation
function getArrayInnerType(type) {
  // Handle string[] format
  if (type.endsWith('[]')) {
    return type.slice(0, -2);
  }
  // Handle Array<string> format
  const match = type.match(ARRAY_GENERIC_REGEX);
  if (match) {
    return match[1];
  }
  return null;
}

// Helper to recursively convert a type to Zod (for nested types)
function typeStringToZod(type) {
  const trimmed = type.trim();
  
  switch (trimmed) {
    case 'string':
      return 'z.string()';
    case 'number':
      return 'z.number()';
    case 'boolean':
      return 'z.boolean()';
    case 'Date':
      return 'z.date()';
    default:
      // Use more specific types for complex React/DOM types
      if (trimmed.includes('ReactNode') || trimmed.includes('React.ReactNode')) {
        return 'z.custom<React.ReactNode>()';
      }
      if (trimmed.includes('ReactElement') || trimmed.includes('React.ReactElement')) {
        return 'z.custom<React.ReactElement>()';
      }
      if (trimmed.includes('Event')) {
        return 'z.custom<Event>()';
      }
      if (trimmed.includes('{') && trimmed.includes('}')) {
        return 'z.record(z.unknown())';
      }
      // Fallback to unknown instead of any
      return 'z.unknown()';
  }
}

// Convert TypeScript type to Zod schema string
function typeToZod(prop) {
  const { type, enumValues, defaultValue } = prop;
  let zodType = 'z.any()';

  // Handle enum/union types first
  if (enumValues && enumValues.length > 0) {
    const enumString = enumValues.map(val => `'${val}'`).join(', ');
    zodType = `z.enum([${enumString}])`;
  }
  // Handle union types with numbers (like 0 | 1 | 2 | 3)
  else if (type.includes('|')) {
    const values = type.split('|').map(v => v.trim());
    const allNumbers = values.every(v => /^\d+$/.test(v));
    if (allNumbers) {
      zodType = `z.union([${values.map(v => `z.literal(${v})`).join(', ')}])`;
    }
  }
  // Handle basic and complex types
  else {
    switch (type) {
      // Basic types
      case 'boolean':
        zodType = 'z.boolean()';
        break;
      case 'string':
        zodType = 'z.string()';
        break;
      case 'number':
        zodType = 'z.number()';
        break;
      case 'Date':
        zodType = 'z.date()';
        break;
      
      // Complex types - use pattern matching with early returns
      default:
        // Array types
        if (type.includes('[]') || type.includes('Array<')) {
          const innerType = getArrayInnerType(type);
          zodType = innerType 
            ? `z.array(${typeStringToZod(innerType)})` 
            : 'z.array(z.unknown())';
          break;
        }
        
        // React types
        if (type.includes('ReactNode') || type.includes('React.ReactNode')) {
          zodType = 'z.custom<React.ReactNode>()';
          break;
        }
        if (type.includes('ReactElement') || type.includes('React.ReactElement')) {
          zodType = 'z.custom<React.ReactElement>()';
          break;
        }
        
        // Event types
        if (type.includes('MouseEvent') || type.includes('KeyboardEvent') || type.includes('Event')) {
          zodType = 'z.custom<Event>()';
          break;
        }
        
        // Function types
        if (type.includes('=>') || type.includes('function') || type.includes('Function')) {
          zodType = 'z.function()';
          break;
        }
        
        // Object types
        if (type.includes('{') && type.includes('}')) {
          zodType = 'z.record(z.unknown())';
          break;
        }
        
        // Fallback for unknown types
        zodType = 'z.unknown()';
        break;
    }
  }

  // Add optional modifier if not required
  if (!prop.required) {
    zodType += '.optional()';
  }

  // Add default value if provided
  if (defaultValue !== undefined && defaultValue !== null) {
    const cleanValue = String(defaultValue).replace(/^['"]|['"]$/g, '');
    
    if (cleanValue === 'true' || cleanValue === 'false') {
      zodType += `.default(${cleanValue})`;
    } else if (!isNaN(Number(cleanValue)) && cleanValue !== '') {
      zodType += `.default(${cleanValue})`;
    } else {
      zodType += `.default('${cleanValue}')`;
    }
  }

  return zodType;
}

// Convert metadata to Zod schema TypeScript code
function convertMetadataToZodSchema(metadata) {
  const props = metadata.props || [];
  
  if (props.length === 0) {
    return `export const ${metadata.name}Schema = z.object({})`;
  }

  const propSchemas = props.map(prop => {
    const zodType = typeToZod(prop);
    
    // Handle special prop names (aria-label, etc) by quoting them
    const needsQuotes = prop.name.includes('-') || 
                       prop.name === 'Unknown' || 
                       !prop.name.match(/^[a-zA-Z_$][a-zA-Z0-9_$]*$/);
    const propName = needsQuotes ? `'${prop.name}'` : prop.name;
    
    // Add JSDoc comment if description exists
    const comment = prop.description 
      ? `  /** ${prop.description} */\n  `
      : '  ';
    
    return `${comment}${propName}: ${zodType}`;
  });

  const schemaDefinition = `export const ${metadata.name}Schema = z.object({\n${propSchemas.join(',\n')}\n})`;
  const typeDefinition = `export type ${metadata.name}Props = z.infer<typeof ${metadata.name}Schema>`;
  
  return `${schemaDefinition}\n\n${typeDefinition}`;
}

// Create individual component directory with Zod schema
function createComponentZodSchema(componentName, componentData) {
  const componentDir = join(projectRoot, 'components', componentName);
  
  // Create directory if it doesn't exist
  if (!existsSync(componentDir)) {
    mkdirSync(componentDir, { recursive: true });
  }

  // Generate Zod Schema
  const zodSchema = convertMetadataToZodSchema(componentData);
  
  // Write schema.zod.ts
  const schemaPath = join(componentDir, 'schema.zod.ts');
  const content = `// Auto-generated Zod schema for ${componentName}
// Generated on: ${new Date().toISOString()}
import { z } from 'zod'

${zodSchema}
`;
  
  writeFileSync(schemaPath, content);
  
  return { componentName, propsCount: (componentData.props || []).length };
}

// Generate main zod/index.ts that exports all component schemas
function generateZodIndex(componentNames) {
  const indexContent = `// Auto-generated Zod schemas index for PatternFly components
// Generated on: ${new Date().toISOString()}
import { z } from 'zod'

${componentNames.map(name => 
  `export * from '../components/${name}/schema.zod.js'`
).join('\n')}

// Export all component names for convenience
export const componentNames = [
${componentNames.map(name => `  '${name}'`).join(',\n')}
] as const

// Helper to get schema by component name
export function getComponentSchema(componentName: string) {
  switch (componentName) {
${componentNames.map(name => 
    `    case '${name}': return import('../components/${name}/schema.zod.js').then(m => m.${name}Schema);`
  ).join('\n')}
    default: throw new Error(\`Unknown component: \${componentName}\`);
  }
}
`;

  // Create zod directory
  const zodDir = join(projectRoot, 'zod');
  if (!existsSync(zodDir)) {
    mkdirSync(zodDir, { recursive: true });
  }

  const zodIndexPath = join(zodDir, 'index.ts');
  writeFileSync(zodIndexPath, indexContent);
}

// Main conversion function
function convertAllComponentsToZod(inputFile) {
  console.log('📖 Reading metadata file for Zod schema generation...');
  
  if (!existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    console.log('💡 Please provide a JSON file with component metadata');
    process.exit(1);
  }

  const metadata = JSON.parse(readFileSync(inputFile, 'utf8'));
  
  console.log(`🔍 Found ${Object.keys(metadata).length} components`);
  
  const { processedComponents, skippedCount } = Object.entries(metadata).reduce(
    (acc, [componentName, componentData]) => {
      // Generate signature for this component's props
      const signature = getPropsSignature(componentData);
      
      // Skip if empty (no props) or duplicate
      if (!signature || acc.seenSignatures.has(signature)) {
        acc.skippedCount++;
        return acc;
      }

      // Process component
      const result = createComponentZodSchema(componentName, componentData);
      acc.processedComponents.push(result);
      acc.seenSignatures.set(signature, componentName);
      
      // Log progress
      if (acc.processedComponents.length % 10 === 0) {
        console.log(`✅ Converted ${acc.processedComponents.length} components to Zod schemas...`);
      }

      return acc;
    },
    { processedComponents: [], seenSignatures: new Map(), skippedCount: 0 }
  );

  // Generate main Zod index file
  const componentNames = processedComponents.map(c => c.componentName);
  generateZodIndex(componentNames);

  const convertedCount = processedComponents.length;
  
  console.log(`\n🎉 Successfully converted ${convertedCount} components to Zod schemas!`);
  console.log(`📁 Component schemas: ${join(projectRoot, 'components/**/schema.zod.ts')}`);
  console.log(`📄 Zod index: ${join(projectRoot, 'zod/index.ts')}`);
  if (skippedCount > 0) {
    console.log(`⏭️  Skipped ${skippedCount} duplicate entries`);
  }
  
  // Show summary
  console.log('\n📊 Summary:');
  const totalProps = processedComponents.reduce((sum, c) => sum + c.propsCount, 0);
  console.log(`  • ${convertedCount} component schemas generated`);
  console.log(`  • ${totalProps} total props converted to Zod`);
  console.log(`  • Average ${Math.round(totalProps / convertedCount)} props per component`);

  return processedComponents;
}

// CLI handling
if (process.argv.length < 3) {
  console.log('🔧 PatternFly Zod Schema Generator');
  console.log('');
  console.log('Usage: node scripts/generate-zod-schemas.js <input-metadata.json>');
  console.log('');
  console.log('Example:');
  console.log('  node scripts/generate-zod-schemas.js component-metadata.json');
  console.log('');
  console.log('This will generate:');
  console.log('  📁 components/ComponentName/schema.zod.ts');
  console.log('  📄 zod/index.ts (main Zod export file)');
  console.log('');
  console.log('Usage in your code:');
  console.log("  import { ButtonSchema } from '@patternfly/patternfly-component-schemas/zod'");
  console.log("  ButtonSchema.parse(props) // Runtime validation!");
  process.exit(1);
}

const inputFile = process.argv[2];
convertAllComponentsToZod(inputFile);

