// SearchInputExpandable component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "SearchInputExpandable";
export const componentDescription = "Properties for creating an expandable search input. These properties should be passed into\nthe search input component's expandableInput property.";
export const propsCount = 3;
export const requiredProps = ["isExpanded","onToggleExpand","toggleAriaLabel"];
