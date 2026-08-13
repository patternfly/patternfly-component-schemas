// Auto-generated Zod schema for ListItemProps
import { z } from 'zod'

export const ListItemPropsSchema = z.object({
  /** Anything that can be rendered inside of list item */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the list item */
  className: z.string().optional(),
  /** Icon for the list item */
  icon: z.any().optional()
})

export type ListItemPropsProps = z.infer<typeof ListItemPropsSchema>
