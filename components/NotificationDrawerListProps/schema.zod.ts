// Auto-generated Zod schema for NotificationDrawerListProps
import { z } from 'zod'

export const NotificationDrawerListPropsSchema = z.object({
  /** Content rendered inside the notification drawer list body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer list body */
  className: z.string().optional(),
  /** Adds styling to the notification drawer list to indicate expand/hide state */
  isHidden: z.boolean().optional(),
  /** Adds an accessible label to the notification drawer list. */
  'Unknown': z.string().optional()
})

export type NotificationDrawerListPropsProps = z.infer<typeof NotificationDrawerListPropsSchema>
