#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

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
  else if (type.includes('|') && /\d/.test(type)) {
    const values = type.split('|').map(v => v.trim());
    const allNumbers = values.every(v => !isNaN(Number(v)));
    if (allNumbers) {
      zodType = `z.union([${values.map(v => `z.literal(${v})`).join(', ')}])`;
    }
  }
  // Handle basic types
  else if (type === 'boolean') {
    zodType = 'z.boolean()';
  }
  else if (type === 'string') {
    zodType = 'z.string()';
  }
  else if (type === 'number') {
    zodType = 'z.number()';
  }
  else if (type === 'Date') {
    zodType = 'z.date()';
  }
  // Handle array types
  else if (type.includes('[]') || type.includes('Array<')) {
    zodType = 'z.array(z.any())';
  }
  // Handle React types
  else if (type.includes('ReactNode') || type.includes('React.ReactNode')) {
    zodType = 'z.any()';
  }
  else if (type.includes('ReactElement') || type.includes('React.ReactElement')) {
    zodType = 'z.any()';
  }
  else if (type.includes('MouseEvent') || type.includes('KeyboardEvent') || type.includes('Event')) {
    zodType = 'z.any()';
  }
  // Handle function types
  else if (type.includes('=>') || type.includes('function') || type.includes('Function')) {
    zodType = 'z.function()';
  }
  // Handle object types
  else if (type.includes('{') && type.includes('}')) {
    zodType = 'z.object({})';
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
  
  const processedComponents = [];
  let convertedCount = 0;

  Object.entries(metadata).forEach(([componentName, componentData]) => {
    // Skip Props interfaces - they're duplicates of component entries
    // component-metadata.json contains both "Button" and "ButtonProps"
    // We only generate from component entries (which have the same props)
    if (componentName.endsWith('Props')) {
      return;
    }

    const result = createComponentZodSchema(componentName, componentData);
    processedComponents.push(result);
    convertedCount++;

    if (convertedCount % 10 === 0) {
      console.log(`✅ Converted ${convertedCount} components to Zod schemas...`);
    }
  });

  // Generate main Zod index file
  const componentNames = processedComponents.map(c => c.componentName);
  generateZodIndex(componentNames);

  console.log(`\n🎉 Successfully converted ${convertedCount} components to Zod schemas!`);
  console.log(`📁 Component schemas: ${join(projectRoot, 'components/**/schema.zod.ts')}`);
  console.log(`📄 Zod index: ${join(projectRoot, 'zod/index.ts')}`);
  
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

