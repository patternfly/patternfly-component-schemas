// Auto-generated Zod schema for MenuContentProps
// Generated on: 2025-10-16T18:45:33.860Z
import { z } from 'zod'

export const MenuContentPropsSchema = z.object({
  /** Items within group */
  children: z.custom<React.ReactNode>().optional(),
  /** Callback to return the height of the menu content */
  getHeight: z.function().optional(),
  innerRef: z.unknown().optional(),
  /** Maximum height of menu content */
  maxMenuHeight: z.string().optional(),
  /** Height of the menu content */
  menuHeight: z.string().optional()
})

export type MenuContentPropsProps = z.infer<typeof MenuContentPropsSchema>
