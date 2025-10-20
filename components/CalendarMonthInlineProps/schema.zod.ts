// Auto-generated Zod schema for CalendarMonthInlineProps
import { z } from 'zod'

export const CalendarMonthInlinePropsSchema = z.object({
  /** Id of the accessible label of the calendar month. Recommended to map to the title. */
  ariaLabelledby: z.string().optional(),
  /** Component wrapping the calendar month when used inline. Recommended to be 'article'. */
  component: z.unknown().optional(),
  /** Title of the calendar rendered above the inline calendar month. Recommended to be a 'title' component. */
  title: z.custom<React.ReactNode>().optional()
})

export type CalendarMonthInlinePropsProps = z.infer<typeof CalendarMonthInlinePropsSchema>
