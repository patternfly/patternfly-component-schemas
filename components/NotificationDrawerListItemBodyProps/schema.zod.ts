// Auto-generated Zod schema for NotificationDrawerListItemBodyProps
import { z } from 'zod'

export const NotificationDrawerListItemBodyPropsSchema = z.object({
  /** Content rendered inside the list item body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list item body */
  className: z.string().optional(),
  /** List item timestamp */
  timestamp: z.custom<React.ReactNode>().optional()
})

export type NotificationDrawerListItemBodyPropsProps = z.infer<typeof NotificationDrawerListItemBodyPropsSchema>
