// Auto-generated Zod schema for NotificationDrawerBody
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const NotificationDrawerBodySchema = z.object({
  /** Content rendered inside the body of the notification drawer */
  children: z.any().optional(),
  /** Additional classes added to the notification drawer body */
  className: z.string().optional().default('')
})

export type NotificationDrawerBodyProps = z.infer<typeof NotificationDrawerBodySchema>
