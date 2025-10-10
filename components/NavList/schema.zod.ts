// Auto-generated Zod schema for NavList
// Generated on: 2025-10-10T18:12:17.775Z
import { z } from 'zod'

export const NavListSchema = z.object({
  /** Aria-label for the back scroll button */
  backScrollAriaLabel: z.string().optional().default('Scroll back'),
  /** Children nodes */
  children: z.any().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel: z.string().optional().default('Scroll foward')
})

export type NavListProps = z.infer<typeof NavListSchema>
