// Auto-generated Zod schema for ActionListItem
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const ActionListItemSchema = z.object({
  /** Children of the action list item */
  children: z.any().optional(),
  /** Additional classes added to the action list item */
  className: z.string().optional()
})

export type ActionListItemProps = z.infer<typeof ActionListItemSchema>
