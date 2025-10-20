// Auto-generated Zod schema for CalendarProps
import { z } from 'zod'

export const CalendarPropsSchema = z.object({
  /** Additional classes to add to the outer div of the calendar month. */
  className: z.string().optional(),
  /** Month/year to base other dates around. */
  date: z.date().optional(),
  /** Flag to set browser focus on the passed date. * */
  isDateFocused: z.boolean().optional(),
  /** Callback when date is selected. */
  onChange: z.custom<Event>().optional(),
  /** Callback when month or year is changed. */
  onMonthChange: z.any().optional(),
  onSelectToggle: z.custom<(open: boolean) => void>().optional(),
  /** Functions that returns if a date is valid and selectable. */
  validators: z.array(z.unknown()).optional()
})

export type CalendarPropsProps = z.infer<typeof CalendarPropsSchema>
