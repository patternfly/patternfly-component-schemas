// Auto-generated Zod schema for OverflowMenuControl
// Generated on: 2025-10-10T18:12:17.773Z
import { z } from 'zod'

export const OverflowMenuControlSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.any().optional(),
  /** Additional classes added to the OverflowMenuControl */
  className: z.string().optional(),
  /** Triggers the overflow dropdown to persist at all viewport sizes */
  hasAdditionalOptions: z.boolean().optional()
})

export type OverflowMenuControlProps = z.infer<typeof OverflowMenuControlSchema>
