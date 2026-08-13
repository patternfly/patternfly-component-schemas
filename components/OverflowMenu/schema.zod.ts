// Auto-generated Zod schema for OverflowMenu
import { z } from 'zod'

export const OverflowMenuSchema = z.object({
  /** Indicates breakpoint at which to switch between expanded and collapsed states. The "sm" breakpoint does not apply to vertical overflow menus. */
  breakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  /** A container reference to base the specified breakpoint on instead of the viewport width. */
  breakpointReference: z.any().optional(),
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenu. */
  className: z.string().optional(),
  /** Indicates the overflow menu orientation is vertical and should respond to height changes instead of width. */
  isVertical: z.boolean().optional().default(false)
})

export type OverflowMenuProps = z.infer<typeof OverflowMenuSchema>
