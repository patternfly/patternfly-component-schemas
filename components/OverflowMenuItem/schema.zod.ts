// Auto-generated Zod schema for OverflowMenuItem
// Generated on: 2025-10-16T19:25:27.757Z
import { z } from 'zod'

export const OverflowMenuItemSchema = z.object({
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenuItem */
  className: z.string().optional(),
  /** Modifies the overflow menu item visibility */
  isPersistent: z.boolean().optional().default(false)
})

export type OverflowMenuItemProps = z.infer<typeof OverflowMenuItemSchema>
