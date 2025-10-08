// PatternFly Component Schemas - JSON Optimized
// Generated on: 2025-10-14T12:27:01.682Z

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
    throw new Error(`Component '${name}' not found`);
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
