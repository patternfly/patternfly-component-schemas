// Auto-generated Zod schema for ListItem
import { z } from 'zod'

export const ListItemSchema = z.object({
  /** Anything that can be rendered inside of list item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Icon for the list item */
  icon: z.any().optional().default('null')
})

export type ListItemProps = z.infer<typeof ListItemSchema>
