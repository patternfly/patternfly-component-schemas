// Auto-generated Zod schema for ListItem
// Generated on: 2025-10-10T18:12:17.782Z
import { z } from 'zod'

export const ListItemSchema = z.object({
  /** Anything that can be rendered inside of list item */
  children: z.any().optional().default('null'),
  /** Icon for the list item */
  icon: z.any().optional().default('null')
})

export type ListItemProps = z.infer<typeof ListItemSchema>
