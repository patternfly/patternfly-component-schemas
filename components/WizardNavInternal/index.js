// WizardNavInternal component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "WizardNavInternal";
export const componentDescription = "Hosts default wizard navigation logic by utilizing the wizard's context and WizardNav/WizardNavItem.\nThis component is not exposed to consumers.";
export const propsCount = 3;
export const requiredProps = ["isNavExpanded","nav","navAriaLabel"];
