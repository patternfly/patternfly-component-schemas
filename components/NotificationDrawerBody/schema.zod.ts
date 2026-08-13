// Auto-generated Zod schema for NotificationDrawerBody
import { z } from 'zod'

export const NotificationDrawerBodySchema = z.object({
  /** Content rendered inside the body of the notification drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer body */
  className: z.string().optional().default('')
})

export type NotificationDrawerBodyProps = z.infer<typeof NotificationDrawerBodySchema>
