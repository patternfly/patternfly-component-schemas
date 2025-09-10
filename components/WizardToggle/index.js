// WizardToggle component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "WizardToggle";
export const componentDescription = "Used to toggle between step content, including the body and footer. This is also where the navigation and its expandability is controlled.";
export const propsCount = 7;
export const requiredProps = ["activeStep","footer","nav","steps"];
