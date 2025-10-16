// Auto-generated Zod schema for NavList
// Generated on: 2025-10-16T18:56:01.632Z
import { z } from 'zod'

export const NavListSchema = z.object({
  /** Aria-label for the back scroll button */
  backScrollAriaLabel: z.string().optional().default('Scroll back'),
  /** Children nodes */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel: z.string().optional().default('Scroll foward')
})

export type NavListProps = z.infer<typeof NavListSchema>
