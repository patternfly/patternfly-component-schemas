#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Simple converter from your metadata format to JSON Schema
function convertMetadataToJsonSchema(metadata) {
  const properties = {};
  const required = [];

  (metadata.props || []).forEach((prop) => {
    const propSchema = {
      description: prop.description || ''
    };

    // Convert type string to JSON Schema type
    if (prop.type === 'boolean') {
      propSchema.type = 'boolean';
    } else if (prop.type === 'string') {
      propSchema.type = 'string';
    } else if (prop.type === 'number') {
      propSchema.type = 'number';
    } else if (prop.type.includes('React.ReactNode')) {
      // React nodes - can't really validate, but mark as any
      propSchema.description += ' (React component or element)';
    } else if (prop.type.includes(' | ')) {
      // Handle union types like 'primary' | 'secondary'
      const enumValues = prop.type.match(/'([^']+)'/g)?.map((s) => s.slice(1, -1));
      if (enumValues && enumValues.length > 0) {
        propSchema.enum = enumValues;
      } else {
        // Complex union, just document the type
        propSchema.description += ` (Type: ${prop.type})`;
      }
    } else if (prop.type.includes('[]')) {
      propSchema.type = 'array';
      propSchema.description += ` (Type: ${prop.type})`;
    } else if (prop.type.includes('=>')) {
      // Function type
      propSchema.description += ` (Function: ${prop.type})`;
    } else {
      // Complex type, just document it
      propSchema.description += ` (Type: ${prop.type})`;
    }

    // Add default value if present
    if (prop.defaultValue !== undefined) {
      try {
        // Try to parse as JSON for proper type
        propSchema.default = JSON.parse(prop.defaultValue);
      } catch {
        // If not valid JSON, use as string
        propSchema.default = prop.defaultValue;
      }
    }

    properties[prop.name] = propSchema;

    if (prop.required) {
      required.push(prop.name);
    }
  });

  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: `${metadata.name} Props`,
    description: metadata.description || `Props for the ${metadata.name} component`,
    properties,
    ...(required.length > 0 && { required }),
    additionalProperties: false
  };
}

// Create individual component directory with schema and index
function createComponentDirectory(componentName, componentData) {
  const componentDir = join(projectRoot, 'components', componentName);
  
  // Create directory if it doesn't exist
  if (!existsSync(componentDir)) {
    mkdirSync(componentDir, { recursive: true });
  }

  // Generate JSON Schema
  const jsonSchema = convertMetadataToJsonSchema(componentData);
  
  // Write schema.json
  const schemaPath = join(componentDir, 'schema.json');
  writeFileSync(schemaPath, JSON.stringify(jsonSchema, null, 2));

  // Write index.js
  const indexPath = join(componentDir, 'index.js');
  const indexContent = `// ${componentName} component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = ${JSON.stringify(componentName)};
export const componentDescription = ${JSON.stringify(componentData.description || '')};
export const propsCount = ${(componentData.props || []).length};
export const requiredProps = ${JSON.stringify((componentData.props || []).filter(p => p.required).map(p => p.name))};
`;
  
  writeFileSync(indexPath, indexContent);
  
  return { componentName, propsCount: (componentData.props || []).length };
}

// Generate main index.js that exports all components
function generateMainIndex(componentNames) {
  const indexContent = `// Auto-generated index file for PatternFly component schemas
// Generated on: ${new Date().toISOString()}

${componentNames.map(name => {
  // Handle component names with dashes - convert to valid JS identifier
  const validName = name.replace(/[^a-zA-Z0-9_$]/g, '_');
  return `export { default as ${validName} } from './components/${name}/index.js';`;
}).join('\n')}

// Export all component names for convenience
export const componentNames = [
${componentNames.map(name => `  '${name}'`).join(',\n')}
];

// Helper function to get schema by component name
export function getComponentSchema(componentName) {
  switch (componentName) {
${componentNames.map(name => 
    `    case '${name}': return import('./components/${name}/index.js').then(m => m.default);`
  ).join('\n')}
    default: throw new Error(\`Unknown component: \${componentName}\`);
  }
}

// Get all schemas as a single object (for backward compatibility)
export async function getAllSchemas() {
  const schemas = {};
${componentNames.map(name => {
    const validName = name.replace(/[^a-zA-Z0-9_$]/g, '_');
    return `  const ${validName} = await import('./components/${name}/index.js');
  schemas['${name}'] = ${validName}.default;`;
  }).join('\n')}
  return schemas;
}
`;

  const mainIndexPath = join(projectRoot, 'index.js');
  writeFileSync(mainIndexPath, indexContent);
}

// Main conversion function
function convertAllComponents(inputFile) {
  console.log('📖 Reading metadata file...');
  
  if (!existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    console.log('💡 Please provide a JSON file with component metadata');
    console.log('💡 Expected format: { "ComponentName": { "name": "ComponentName", "props": [...] } }');
    process.exit(1);
  }

  const metadata = JSON.parse(readFileSync(inputFile, 'utf8'));
  
  console.log(`🔍 Found ${Object.keys(metadata).length} components`);
  
  const processedComponents = [];
  let convertedCount = 0;

  Object.entries(metadata).forEach(([componentName, componentData]) => {
    // Skip Props interfaces to avoid duplicates
    if (componentName.endsWith('Props')) {
      return;
    }

    const result = createComponentDirectory(componentName, componentData);
    processedComponents.push(result);
    convertedCount++;

    if (convertedCount % 10 === 0) {
      console.log(`✅ Converted ${convertedCount} components...`);
    }
  });

  // Generate main index file
  const componentNames = processedComponents.map(c => c.componentName);
  generateMainIndex(componentNames);

  console.log(`\n🎉 Successfully converted ${convertedCount} components!`);
  console.log(`📁 Components directory: ${join(projectRoot, 'components')}`);
  console.log(`📄 Main index: ${join(projectRoot, 'index.js')}`);
  
  // Show summary
  console.log('\n📊 Summary:');
  processedComponents.forEach(({ componentName, propsCount }) => {
    console.log(`  • ${componentName}: ${propsCount} props`);
  });

  return processedComponents;
}

// CLI handling
if (process.argv.length < 3) {
  console.log('🔧 PatternFly Component Schema Generator');
  console.log('');
  console.log('Usage: node scripts/generate-schemas.js <input-metadata.json>');
  console.log('');
  console.log('Example:');
  console.log('  node scripts/generate-schemas.js component-metadata.json');
  console.log('');
  console.log('This will generate:');
  console.log('  📁 components/ComponentName/schema.json');
  console.log('  📁 components/ComponentName/index.js');
  console.log('  📄 index.js (main export file)');
  process.exit(1);
}

const inputFile = process.argv[2];
convertAllComponents(inputFile);
