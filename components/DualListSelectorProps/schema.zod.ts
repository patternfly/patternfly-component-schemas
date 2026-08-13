// Auto-generated Zod schema for DualListSelectorProps
import { z } from 'zod'

export const DualListSelectorPropsSchema = z.object({
  /** Content to be rendered in the dual list selector. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** Flag indicating whether a tree dual list selector has animations. This will always render
nested dual list selector items rather than dynamically rendering them. This prop will be removed in
the next breaking change release in favor of defaulting to always-rendered items. */
  hasAnimations: z.boolean().optional(),
  /** ID of the dual list selector. */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector uses trees instead of simple lists. */
  isTree: z.boolean().optional()
})

export type DualListSelectorPropsProps = z.infer<typeof DualListSelectorPropsSchema>
