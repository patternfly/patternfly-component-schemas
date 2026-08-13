// Auto-generated Zod schema for OverflowMenuContent
import { z } from 'zod'

export const OverflowMenuContentSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuContent */
  className: z.string().optional(),
  /** Modifies the overflow menu content visibility */
  isPersistent: z.boolean().optional()
})

export type OverflowMenuContentProps = z.infer<typeof OverflowMenuContentSchema>
