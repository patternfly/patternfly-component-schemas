// Auto-generated Zod schema for OverflowMenu
import { z } from 'zod'

export const OverflowMenuSchema = z.object({
  /** Indicates breakpoint at which to switch between horizontal menu and vertical dropdown */
  breakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  /** A container reference to base the specified breakpoint on instead of the viewport width. */
  breakpointReference: z.any().optional(),
  /** Any elements that can be rendered in the menu */
  children: z.unknown().optional(),
  /** Additional classes added to the OverflowMenu. */
  className: z.string().optional()
})

export type OverflowMenuProps = z.infer<typeof OverflowMenuSchema>
