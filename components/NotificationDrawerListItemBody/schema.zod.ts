// Auto-generated Zod schema for NotificationDrawerListItemBody
// Generated on: 2025-10-10T18:12:17.777Z
import { z } from 'zod'

export const NotificationDrawerListItemBodySchema = z.object({
  /** Content rendered inside the list item body */
  children: z.any().optional(),
  /** Additional classes added to the list item body */
  className: z.string().optional().default(''),
  /** List item timestamp */
  timestamp: z.any().optional()
})

export type NotificationDrawerListItemBodyProps = z.infer<typeof NotificationDrawerListItemBodySchema>
