// Auto-generated Zod schema for DualListSelector
import { z } from 'zod'

export const DualListSelectorSchema = z.object({
  /** Content to be rendered in the dual list selector. */
  children: z.custom<React.ReactNode>().optional().default(''),
  /** Additional classes applied to the dual list selector. */
  className: z.string().optional(),
  /** ID of the dual list selector. */
  id: z.string().optional(),
  /** Flag indicating if the dual list selector uses trees instead of simple lists. */
  isTree: z.boolean().optional().default(false)
})

export type DualListSelectorProps = z.infer<typeof DualListSelectorSchema>
