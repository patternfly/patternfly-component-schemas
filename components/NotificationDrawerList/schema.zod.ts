// Auto-generated Zod schema for NotificationDrawerList
import { z } from 'zod'

export const NotificationDrawerListSchema = z.object({
  /** Adds an accessible label to the notification drawer list. */
  'aria-label': z.string().optional(),
  /** Content rendered inside the notification drawer list body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer list body */
  className: z.string().optional().default(''),
  /** Adds styling to the notification drawer list to indicate expand/hide state */
  isHidden: z.boolean().optional().default(false)
})

export type NotificationDrawerListProps = z.infer<typeof NotificationDrawerListSchema>
