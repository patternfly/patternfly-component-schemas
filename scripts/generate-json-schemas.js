#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import os from 'node:os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const schemasDir = join(projectRoot, 'schemas');

// Simple converter from metadata format to JSON Schema
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
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    type: 'object',
    title: `${metadata.name} Props`,
    description: metadata.description || `Props for the ${metadata.name} component`,
    properties,
    ...(required.length > 0 && { required }),
    additionalProperties: false
  };
}

// Generate lightweight JSON schemas
function generateJsonSchemas(inputFile) {
  console.log('📖 Reading metadata file...');

  if (!existsSync(inputFile)) {
    console.error(`❌ Input file not found: ${inputFile}`);
    console.log('💡 Please provide a JSON file with component metadata');
    console.log('💡 Expected format: { "ComponentName": { "name": "ComponentName", "props": [...] } }');
    process.exit(1);
  }

  const metadata = JSON.parse(readFileSync(inputFile, 'utf8'));

  console.log(`🔍 Found ${Object.keys(metadata).length} components`);

  // Ensure schemas directory exists
  if (!existsSync(schemasDir)) {
    mkdirSync(schemasDir, { recursive: true });
  }

  // Create schemas file
  const schemas = {};
  const components = {};
  let convertedCount = 0;

  // Process each component
  Object.entries(metadata).forEach(([componentName, metadata]) => {
    // Skip Props interfaces to avoid duplicates
    if (componentName.endsWith('Props')) {
      return;
    }

    // Convert to JSON Schema
    const schema = convertMetadataToJsonSchema(metadata);
    schemas[componentName] = schema;

    // Create component metadata
    components[componentName] = {
      name: componentName,
      description: metadata.description || '',
      propsCount: metadata.props?.length || 0,
      requiredProps: (metadata.props || []).filter(prop => prop.required).map(prop => prop.name),
      requiredPropsCount: (metadata.props || []).filter(prop => prop.required).length,
      hasRequiredProps: (metadata.props || []).some(prop => prop.required),
      hasVariants: (metadata.props || []).some(prop => prop.type.includes(' | ')),
      isComplex: (metadata.props?.length || 0) > 10 || (metadata.props || []).some(prop => prop.type.includes('=>'))
    };

    convertedCount++;

    if (convertedCount % 10 === 0) {
      console.log(`✅  Converted ${convertedCount} components...`);
    }
  });

  // Calculate stats
  const totalProps = Object.values(components).reduce((sum, c) => sum + c.propsCount, 0);
  const componentsWithRequiredProps = Object.values(components).filter(c => c.hasRequiredProps).length;
  const complexComponents = Object.values(components).filter(c => c.isComplex).length;

  // Create metadata structure
  const lightweightIndex = {
    version: '1.0.0',
    generated: new Date().toISOString(),
    totalComponents: Object.keys(components).length,
    totalProps,
    averagePropsPerComponent: Math.round(totalProps / Object.keys(components).length),
    componentsWithRequiredProps,
    complexComponents,
    components
  };

  // Write schemas
  const schemasPath = join(schemasDir, 'schemas.json');
  writeFileSync(schemasPath, JSON.stringify(schemas, null, 2) + os.EOL);

  // Write metadata
  const indexPath = join(schemasDir, 'index.json');
  writeFileSync(indexPath, JSON.stringify(lightweightIndex, null, 2) + os.EOL);

  console.log(`\n🎉 Successfully converted ${convertedCount} components!`);

  // Create index.json.js
  const jsonCode = `// PatternFly Component Schemas - JSON Optimized
// Generated on: ${new Date().toISOString()}

// Load metadata
const { default: index } = await import('./schemas/index.json', { with: { type: 'json' } });

// Cache for loaded schemas
let schemas = null;

// Export lightweight data
export { index };
export const componentNames = Object.keys(index.components);
export const componentCount = index.totalComponents;
export const schemaVersion = index.version;

// Get all schemas on-demand
export async function getAllSchemas() {
  if (!schemas) {
    const { default: loadedSchemas } = await import('./schemas/schemas.json', { with: { type: 'json' } });
    schemas = loadedSchemas;
  }
  return schemas;
}

// Lazy-loaded schema access
export async function getComponentSchema(name) {
  if (!index.components[name]) {
    throw new Error(\`Component '\${name}' not found\`);
  }

  const schemas = await getAllSchemas();
  return schemas[name];
}

// Fast operations using in-memory metadata
export function getComponentNames(filter = 'all') {
  const allComponents = Object.keys(index.components);

  switch (filter) {
    case 'complex':
      return allComponents.filter(name => index.components[name].isComplex);
    case 'withRequiredProps':
      return allComponents.filter(name => index.components[name].hasRequiredProps);
    default:
      return allComponents;
  }
}

export function searchComponents(query) {
  const lowerQuery = query.toLowerCase();
  return Object.values(index.components).filter(c =>
    c.name.toLowerCase().includes(lowerQuery) ||
    c.description.toLowerCase().includes(lowerQuery)
  );
}

export function getComponentsWithRequiredProps() {
  return Object.values(index.components).filter(c => c.hasRequiredProps);
}

export function getComplexComponents() {
  return Object.values(index.components).filter(c => c.isComplex);
}

export function getComponentStats() {
  return {
    totalComponents: index.totalComponents,
    totalProps: index.totalProps,
    averagePropsPerComponent: index.averagePropsPerComponent,
    componentsWithRequiredProps: index.componentsWithRequiredProps,
    complexComponents: index.complexComponents
  };
}

// Default export
export default index;
`;

  const jsonPath = join(projectRoot, 'index.json.js');
  writeFileSync(jsonPath, jsonCode);
}

// Main execution
const inputFile = process.argv[2];
generateJsonSchemas(inputFile);
