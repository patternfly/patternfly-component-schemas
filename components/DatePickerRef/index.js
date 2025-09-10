// DatePickerRef component metadata
import schema from './schema.json' assert { type: 'json' };

export default schema;
export { schema };

// Component metadata
export const componentName = "DatePickerRef";
export const componentDescription = "Allows finer control over the calendar's open state when a React ref is passed into the\ndate picker component. Accessed via ref.current[property], e.g. ref.current.toggleCalendar().";
export const propsCount = 3;
export const requiredProps = ["isCalendarOpen","setCalendarOpen","toggleCalendar"];
