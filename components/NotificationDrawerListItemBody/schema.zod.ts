// Auto-generated Zod schema for NotificationDrawerListItemBody
// Generated on: 2025-10-16T18:45:33.858Z
import { z } from 'zod'

export const NotificationDrawerListItemBodySchema = z.object({
  /** Content rendered inside the list item body */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list item body */
  className: z.string().optional().default(''),
  /** List item timestamp */
  timestamp: z.custom<React.ReactNode>().optional()
})

export type NotificationDrawerListItemBodyProps = z.infer<typeof NotificationDrawerListItemBodySchema>
