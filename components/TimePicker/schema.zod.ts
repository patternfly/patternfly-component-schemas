// Auto-generated Zod schema for TimePicker
import { z } from 'zod'

export const TimePickerSchema = z.object({
  /** Accessible label for the time picker */
  'aria-label': z.string().optional().default('Time picker'),
  /** Additional classes added to the time picker. */
  className: z.string().optional().default(''),
  /** Character to display between the hour and minute */
  delimiter: z.string().optional().default(':'),
  /** Id of the time picker */
  id: z.string().optional(),
  /** Includes number of seconds with the chosen time and allows users to manually edit the seconds value. */
  includeSeconds: z.boolean().optional(),
  /** Additional props for input field */
  inputProps: z.unknown().optional().default('{}'),
  /** Error message to display when the time is provided in an invalid format. */
  invalidFormatErrorMessage: z.string().optional().default('Invalid time format'),
  /** Error message to display when the time provided is not within the minTime/maxTime constraints */
  invalidMinMaxErrorMessage: z.string().optional().default('Invalid time entered'),
  /** True if the time is 24 hour time. False if the time is 12 hour time */
  is24Hour: z.boolean().optional().default(false),
  /** Flag indicating the time picker is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to control the opened state of the time picker menu */
  isOpen: z.boolean().optional().default(false),
  /** A time string indicating the maximum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  maxTime: z.any().optional().default(''),
  /** The container to append the menu to. Defaults to 'inline'.
If your menu is being cut off you can append it to an element higher up the DOM tree.
Some examples:
menuAppendTo="parent"
menuAppendTo={() => document.body}
menuAppendTo={document.getElementById('target')} */
  menuAppendTo: z.enum(['inline', 'parent']).optional().default('inline'),
  /** A time string indicating the minimum value allowed. The format could be an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  minTime: z.any().optional().default(''),
  /** Optional event handler called each time the value in the time picker input changes. */
  onChange: z.custom<Event>().optional(),
  /** String to display in the empty time picker field as a hint for the expected time format */
  placeholder: z.string().optional().default('hh:mm'),
  /** Handler invoked each time the open state of time picker updates */
  setIsOpen: z.custom<(isOpen?: boolean) => void>().optional().default('() => {}'),
  /** Size of step between time options in minutes. */
  stepMinutes: z.number().optional().default(30),
  /** A time string. The format could be  an ISO 8601 formatted date string or in 'HH{delimiter}MM' format */
  time: z.any().optional().default(''),
  /** Optional validator can be provided to override the internal time validator. */
  validateTime: z.custom<(time: string) => boolean>().optional(),
  /** Width of the time picker. */
  width: z.string().optional().default('150px'),
  /** z-index of the time picker */
  zIndex: z.number().optional().default(9999)
})

export type TimePickerProps = z.infer<typeof TimePickerSchema>
