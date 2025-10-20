// Auto-generated Zod schema for DatePicker
import { z } from 'zod'

export const DatePickerSchema = z.object({
  /** The container to append the menu to. Defaults to 'inline'.
If your menu is being cut off you can append it to an element higher up the DOM tree.
Some examples:
menuAppendTo={() => document.body};
menuAppendTo={document.getElementById('target')} */
  appendTo: z.enum(['inline']).optional().default('inline'),
  /** Accessible label for the date picker. */
  'aria-label': z.string().optional().default('Date picker'),
  /** Accessible label for the button to open the date picker. */
  buttonAriaLabel: z.string().optional().default('Toggle date picker'),
  /** Accessible label for the date cells. */
  cellAriaLabel: z.custom<(date: Date) => string>().optional(),
  /** Additional classes added to the date picker. */
  className: z.string().optional(),
  /** How to format the date in the text input. */
  dateFormat: z.custom<(date: Date) => string>().optional().default('(date: Date) =>
`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
  .getDate()
  .toString()
  .padStart(2, '0')}`'),
  /** How to parse the date in the text input. */
  dateParse: z.custom<(value: string) => Date>().optional().default('(val: string) => (val.split('-').length === 3 ? new Date(`${val}T00:00:00`) : new Date(undefined))'),
  /** How to format days in buttons in table cells. */
  dayFormat: z.custom<React.ReactNode>().optional(),
  /** Helper text to display alongside the date picker. Expects a HelperText component. */
  helperText: z.custom<React.ReactNode>().optional(),
  /** Props used to ensure accessibility when displaying the calendar month inline. */
  inlineProps: z.unknown().optional(),
  /** Additional props for the text input. */
  inputProps: z.unknown().optional().default('{}'),
  /** Error message to display when the text input contains a non-empty value in an invalid format. */
  invalidFormatText: z.string().optional().default('Invalid date'),
  /** Flag indicating the date picker is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** If using the default formatters which locale to use. Undefined defaults to current locale.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation */
  locale: z.string().optional().default('undefined'),
  /** How to format days in header for screen readers. */
  longWeekdayFormat: z.custom<React.ReactNode>().optional(),
  /** How to format months in month select. */
  monthFormat: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the next month button. */
  nextMonthAriaLabel: z.string().optional(),
  /** Callback called every time the text input loses focus. */
  onBlur: z.custom<(event: any, value: string, date?: Date) => void>().optional().default('(): any => undefined'),
  /** Callback called every time the text input value changes. */
  onChange: z.custom<Event>().optional().default('(): any => undefined'),
  /** String to display in the empty text input as a hint for the expected date format. */
  placeholder: z.string().optional().default('YYYY-MM-DD'),
  /** Props to pass to the popover that contains the calendar month component. */
  popoverProps: z.unknown().optional(),
  /** Accessible label for the previous month button. */
  prevMonthAriaLabel: z.string().optional(),
  /** Which date to start range styles from. */
  rangeStart: z.date().optional(),
  /** Options to customize the requirement of a date */
  requiredDateOptions: z.unknown().optional(),
  style: z.unknown().optional().default('{}'),
  /** Functions that returns an error message if a date is invalid. */
  validators: z.array(z.unknown()).optional().default('[]'),
  /** Value of the text input. */
  value: z.string().optional().default(''),
  /** How to format week days in header. */
  weekdayFormat: z.custom<React.ReactNode>().optional(),
  /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
  weekStart: z.any().optional(),
  /** Accessible label for the year input. */
  yearInputAriaLabel: z.string().optional()
})

export type DatePickerProps = z.infer<typeof DatePickerSchema>
