// Wizard component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "Wizard";
export const componentDescription = "Wrapper for all steps and hosts state, including navigation helpers, within context.\nThe WizardContext provided by default gives any child of wizard access to those resources.";
export const propsCount = 15;
export const requiredProps = ["children"];
