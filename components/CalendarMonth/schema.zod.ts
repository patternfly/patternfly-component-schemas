// Auto-generated Zod schema for CalendarMonth
import { z } from 'zod'

export const CalendarMonthSchema = z.object({
  /** Accessible label for the date cells. */
  cellAriaLabel: z.custom<(date: Date) => string>().optional(),
  /** Additional classes to add to the outer div of the calendar month. */
  className: z.string().optional(),
  /** Month/year to base other dates around. */
  date: z.date().optional(),
  /** How to format days in buttons in table cells. */
  dayFormat: z.custom<React.ReactNode>().optional().default('(date) => date.getDate()'),
  /** Props used to ensure accessibility when displaying the calendar month inline. */
  inlineProps: z.unknown().optional(),
  /** Flag to set browser focus on the passed date. * */
  isDateFocused: z.boolean().optional().default(false),
  /** If using the default formatters which locale to use. Undefined defaults to current locale.
See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation */
  locale: z.string().optional().default('undefined'),
  /** How to format days in header for screen readers. */
  longWeekdayFormat: z.custom<React.ReactNode>().optional().default('(date) => date.toLocaleDateString(locale, { weekday: 'long' })'),
  /** How to format months in month select. */
  monthFormat: z.custom<React.ReactNode>().optional().default('(date) => date.toLocaleDateString(locale, { month: 'long' })'),
  /** Accessible label for the next month button. */
  nextMonthAriaLabel: z.string().optional().default('Next month'),
  /** Callback when date is selected. */
  onChange: z.custom<Event>().optional().default('() => {}'),
  /** Callback when month or year is changed. */
  onMonthChange: z.any().optional().default('() => {}'),
  /** Accessible label for the previous month button. */
  prevMonthAriaLabel: z.string().optional().default('Previous month'),
  /** Which date to start range styles from. */
  rangeStart: z.date().optional(),
  /** Functions that returns if a date is valid and selectable. */
  validators: z.array(z.unknown()).optional().default('[() => true]'),
  /** How to format week days in header. */
  weekdayFormat: z.custom<React.ReactNode>().optional().default('(date) => date.toLocaleDateString(locale, { weekday: 'narrow' })'),
  /** Day of week that starts the week. 0 is Sunday, 6 is Saturday. */
  weekStart: z.any().optional().default(0),
  /** Accessible label for the year input. */
  yearInputAriaLabel: z.string().optional().default('Select year')
})

export type CalendarMonthProps = z.infer<typeof CalendarMonthSchema>
