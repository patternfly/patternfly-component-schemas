// SearchInputSearchAttribute component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "SearchInputSearchAttribute";
export const componentDescription = "Properties for adding search attributes to an advanced search input. These properties must\nbe passed in as an object within an array to the search input component's attribute property.";
export const propsCount = 2;
export const requiredProps = ["attr","display"];
