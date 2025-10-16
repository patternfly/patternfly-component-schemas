// Auto-generated Zod schema for OverflowMenuControl
// Generated on: 2025-10-16T18:45:33.850Z
import { z } from 'zod'

export const OverflowMenuControlSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuControl */
  className: z.string().optional(),
  /** Triggers the overflow dropdown to persist at all viewport sizes */
  hasAdditionalOptions: z.boolean().optional()
})

export type OverflowMenuControlProps = z.infer<typeof OverflowMenuControlSchema>
