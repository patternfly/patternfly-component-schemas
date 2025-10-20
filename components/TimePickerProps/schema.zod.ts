// Auto-generated Zod schema for TimePickerProps
import { z } from 'zod'

export const TimePickerPropsSchema = z.object({
  /** Additional classes added to the time picker. */
  className: z.string().optional(),
  /** Character to display between the hour and minute */
  delimiter: z.string().optional(),
  /** Id of the time picker */
  id: z.string().optional(),
  /** Includes number of seconds with the chosen time and allows users to manually edit the seconds value. */
  includeSeconds: z.boolean().optional(),
  /** Additional props for input field */
  inputProps: z.unknown().optional(),
  /** Error message to display when the time is provided in an invalid format. */
  invalidFormatErrorMessage: z.string().optional(),
  /** Error message to display when the time provided is not within the minTime/maxTime constraints */
  invalidMinMaxErrorMessage: z.string().optional(),
  /** True if the time is 24 hour time. False if the time is 12 hour time */
  is24Hour: z.boolean().optional(),
  /** Flag indicating the time picker is disabled */
  isDisabled: z.boolean().optional(),
  /** Flag to control the opened state of the time picker menu */
  isOpen: z.boolean().optional(),
  /** A time string indicating the maximum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  maxTime: z.any().optional(),
  /** The container to append the menu to. Defaults to 'inline'.
If your menu is being cut off you can append it to an element higher up the DOM tree.
Some examples:
menuAppendTo="parent"
menuAppendTo={() => document.body}
menuAppendTo={document.getElementById('target')} */
  menuAppendTo: z.enum(['inline', 'parent']).optional(),
  /** A time string indicating the minimum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  minTime: z.any().optional(),
  /** Optional event handler called each time the value in the time picker input changes. */
  onChange: z.custom<Event>().optional(),
  /** String to display in the empty time picker field as a hint for the expected time format */
  placeholder: z.string().optional(),
  /** Handler invoked each time the open state of time picker updates */
  setIsOpen: z.custom<(isOpen?: boolean) => void>().optional(),
  /** Size of step between time options in minutes. */
  stepMinutes: z.number().optional(),
  /** A time string. The format could be  an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  time: z.any().optional(),
  /** Accessible label for the time picker */
  'Unknown': z.string().optional(),
  /** Optional validator can be provided to override the internal time validator. */
  validateTime: z.custom<(time: string) => boolean>().optional(),
  /** Width of the time picker. */
  width: z.string().optional(),
  /** z-index of the time picker */
  zIndex: z.number().optional()
})

export type TimePickerPropsProps = z.infer<typeof TimePickerPropsSchema>
