// Auto-generated Zod schema for DatePickerProps
import { z } from 'zod'

export const DatePickerPropsSchema = z.object({
  /** The container to append the menu to. Defaults to 'inline'.
If your menu is being cut off you can append it to an element higher up the DOM tree.
Some examples:
menuAppendTo={() => document.body};
menuAppendTo={document.getElementById('target')} */
  appendTo: z.enum(['inline']).optional(),
  /** Accessible label for the button to open the date picker. */
  buttonAriaLabel: z.string().optional(),
  /** Additional classes added to the date picker. */
  className: z.string().optional(),
  /** How to format the date in the text input. */
  dateFormat: z.custom<(date: Date) => string>().optional(),
  /** How to parse the date in the text input. */
  dateParse: z.custom<(value: string) => Date>().optional(),
  /** Helper text to display alongside the date picker. Expects a HelperText component. */
  helperText: z.custom<React.ReactNode>().optional(),
  /** Additional props for the text input. */
  inputProps: z.unknown().optional(),
  /** Error message to display when the text input contains a non-empty value in an invalid format. */
  invalidFormatText: z.string().optional(),
  /** Flag indicating the date picker is disabled. */
  isDisabled: z.boolean().optional(),
  /** Callback called every time the text input loses focus. */
  onBlur: z.custom<(event: any, value: string, date?: Date) => void>().optional(),
  /** Callback called every time the text input value changes. */
  onChange: z.custom<Event>().optional(),
  /** String to display in the empty text input as a hint for the expected date format. */
  placeholder: z.string().optional(),
  /** Props to pass to the popover that contains the calendar month component. */
  popoverProps: z.unknown().optional(),
  /** Options to customize the requirement of a date */
  requiredDateOptions: z.unknown().optional(),
  /** Accessible label for the date picker. */
  'Unknown': z.string().optional(),
  /** Functions that returns an error message if a date is invalid. */
  validators: z.array(z.unknown()).optional(),
  /** Value of the text input. */
  value: z.string().optional()
})

export type DatePickerPropsProps = z.infer<typeof DatePickerPropsSchema>
