// Auto-generated Zod schema for CalendarFormat
import { z } from 'zod'

export const CalendarFormatSchema = z.object({
  /** Accessible label for the date cells. */
  cellAriaLabel: z.custom<(date: Date) => string>().optional(),
  /** How to format days in buttons in table cells. */
  dayFormat: z.custom<React.ReactNode>().optional(),
  /** Props used to ensure accessibility when displaying the calendar month inline. */
  inlineProps: z.unknown().optional(),
  /** If using the default formatters which locale to use. Undefined defaults to current locale.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation */
  locale: z.string().optional(),
  /** How to format days in header for screen readers. */
  longWeekdayFormat: z.custom<React.ReactNode>().optional(),
  /** How to format months in month select. */
  monthFormat: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the next month button. */
  nextMonthAriaLabel: z.string().optional(),
  /** Accessible label for the previous month button. */
  prevMonthAriaLabel: z.string().optional(),
  /** Which date to start range styles from. */
  rangeStart: z.date().optional(),
  /** How to format week days in header. */
  weekdayFormat: z.custom<React.ReactNode>().optional(),
  /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
  weekStart: z.any().optional(),
  /** Accessible label for the year input. */
  yearInputAriaLabel: z.string().optional()
})

export type CalendarFormatProps = z.infer<typeof CalendarFormatSchema>
