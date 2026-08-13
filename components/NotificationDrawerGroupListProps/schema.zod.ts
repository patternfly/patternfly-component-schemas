// Auto-generated Zod schema for NotificationDrawerGroupListProps
import { z } from 'zod'

export const NotificationDrawerGroupListPropsSchema = z.object({
  /** Content rendered inside the notification drawer list body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer list body */
  className: z.string().optional()
})

export type NotificationDrawerGroupListPropsProps = z.infer<typeof NotificationDrawerGroupListPropsSchema>
