// Auto-generated Zod schema for NotificationDrawer
import { z } from 'zod'

export const NotificationDrawerSchema = z.object({
  /** Content rendered inside the notification drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer */
  className: z.string().optional()
})

export type NotificationDrawerProps = z.infer<typeof NotificationDrawerSchema>
