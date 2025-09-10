// MenuContainer component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "MenuContainer";
export const componentDescription = "Container that links a menu and menu toggle together, to handle basic keyboard input and control the opening and closing of a menu.";
export const propsCount = 13;
export const requiredProps = ["isOpen","menu","menuRef","toggle","toggleRef"];
