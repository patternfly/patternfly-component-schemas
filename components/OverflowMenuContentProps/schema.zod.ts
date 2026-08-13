// Auto-generated Zod schema for OverflowMenuContentProps
import { z } from 'zod'

export const OverflowMenuContentPropsSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuContent */
  className: z.string().optional(),
  /** Modifies the overflow menu content visibility */
  isPersistent: z.boolean().optional()
})

export type OverflowMenuContentPropsProps = z.infer<typeof OverflowMenuContentPropsSchema>
