// WizardBasicStep component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "WizardBasicStep";
export const componentDescription = "Type used to define 'basic' steps, or in other words, steps that are neither parents or children of parents.";
export const propsCount = 10;
export const requiredProps = ["id","index","name"];
