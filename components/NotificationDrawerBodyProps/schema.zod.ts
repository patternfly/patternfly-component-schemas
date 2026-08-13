// Auto-generated Zod schema for NotificationDrawerBodyProps
import { z } from 'zod'

export const NotificationDrawerBodyPropsSchema = z.object({
  /** Content rendered inside the body of the notification drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer body */
  className: z.string().optional()
})

export type NotificationDrawerBodyPropsProps = z.infer<typeof NotificationDrawerBodyPropsSchema>
