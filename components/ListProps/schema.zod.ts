// Auto-generated Zod schema for ListProps
import { z } from 'zod'

export const ListPropsSchema = z.object({
  /** Anything that can be rendered inside of the list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Sets the type of the list component. */
  component: z.enum(['ol', 'ul']).optional(),
  /** Modifies the size of the icons in the list */
  iconSize: z.enum(['default', 'large']).optional(),
  /** Modifies the list to add borders between items */
  isBordered: z.boolean().optional(),
  /** Modifies the list to include plain styling */
  isPlain: z.boolean().optional(),
  /** Sets the way items are numbered if component is set to "ol". */
  type: z.unknown().optional(),
  /** Adds an accessible label to the list. */
  'Unknown': z.string().optional(),
  /** Adds list variant styles */
  variant: z.unknown().optional()
})

export type ListPropsProps = z.infer<typeof ListPropsSchema>
