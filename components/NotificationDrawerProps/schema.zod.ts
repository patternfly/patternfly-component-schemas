// Auto-generated Zod schema for NotificationDrawerProps
import { z } from 'zod'

export const NotificationDrawerPropsSchema = z.object({
  /** Content rendered inside the notification drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification drawer */
  className: z.string().optional(),
  innerRef: z.unknown().optional()
})

export type NotificationDrawerPropsProps = z.infer<typeof NotificationDrawerPropsSchema>
