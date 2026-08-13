// Auto-generated Zod schema for NotificationDrawerGroupList
import { z } from 'zod'

export const NotificationDrawerGroupListSchema = z.object({
  /** Content rendered inside the notification drawer list body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer list body */
  className: z.string().optional().default('')
})

export type NotificationDrawerGroupListProps = z.infer<typeof NotificationDrawerGroupListSchema>
