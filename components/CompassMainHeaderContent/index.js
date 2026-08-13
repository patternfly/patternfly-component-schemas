// CompassMainHeaderContent component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "CompassMainHeaderContent";
export const componentDescription = "A wrapper component to be passed as custom content for the Compass main header. This should also be wrapped\nin a `Panel` with `PanelMain` and `PanelMainBody`.";
export const propsCount = 2;
export const requiredProps = ["children"];
