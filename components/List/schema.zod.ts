// Auto-generated Zod schema for List
import { z } from 'zod'

export const ListSchema = z.object({
  /** Adds an accessible label to the list. */
  'aria-label': z.string().optional(),
  /** Anything that can be rendered inside of the list */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the list */
  className: z.string().optional().default(''),
  /** Sets the type of the list component. */
  component: z.enum(['ol', 'ul']).optional().default('ListComponent.ul'),
  /** Modifies the size of the icons in the list */
  iconSize: z.enum(['default', 'large']).optional().default('default'),
  /** Modifies the list to add borders between items */
  isBordered: z.boolean().optional().default(false),
  /** Modifies the list to include plain styling */
  isPlain: z.boolean().optional().default(false),
  ref: z.unknown().optional().default('null'),
  /** Sets the way items are numbered if component is set to "ol". */
  type: z.unknown().optional().default('OrderType.number'),
  /** Adds list variant styles */
  variant: z.unknown().optional().default('null')
})

export type ListProps = z.infer<typeof ListSchema>
