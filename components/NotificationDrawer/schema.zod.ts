// Auto-generated Zod schema for NotificationDrawer
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const NotificationDrawerSchema = z.object({
  /** Content rendered inside the notification drawer */
  children: z.any().optional(),
  /** Additional classes added to the notification drawer */
  className: z.string().optional()
})

export type NotificationDrawerProps = z.infer<typeof NotificationDrawerSchema>
