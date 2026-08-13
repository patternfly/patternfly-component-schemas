// Auto-generated Zod schema for ActionListItem
import { z } from 'zod'

export const ActionListItemSchema = z.object({
  /** Children of the action list item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list item */
  className: z.string().optional()
})

export type ActionListItemProps = z.infer<typeof ActionListItemSchema>
