// Auto-generated Zod schema for NotificationDrawerGroupList
// Generated on: 2025-10-10T18:12:17.777Z
import { z } from 'zod'

export const NotificationDrawerGroupListSchema = z.object({
  /** Content rendered inside the notification drawer list body */
  children: z.any().optional(),
  /** Additional classes added to the notification drawer list body */
  className: z.string().optional().default('')
})

export type NotificationDrawerGroupListProps = z.infer<typeof NotificationDrawerGroupListSchema>
