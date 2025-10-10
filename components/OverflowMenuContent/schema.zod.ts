// Auto-generated Zod schema for OverflowMenuContent
// Generated on: 2025-10-10T18:12:17.773Z
import { z } from 'zod'

export const OverflowMenuContentSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.any().optional(),
  /** Additional classes added to the OverflowMenuContent */
  className: z.string().optional(),
  /** Modifies the overflow menu content visibility */
  isPersistent: z.boolean().optional()
})

export type OverflowMenuContentProps = z.infer<typeof OverflowMenuContentSchema>
