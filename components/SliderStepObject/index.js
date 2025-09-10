// SliderStepObject component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "SliderStepObject";
export const componentDescription = "Properties for creating custom steps in a slider. These properties should be passed in as\nan object within an array to the slider component's customSteps property.";
export const propsCount = 3;
export const requiredProps = ["label","value"];
