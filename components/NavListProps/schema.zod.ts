// Auto-generated Zod schema for NavListProps
import { z } from 'zod'

export const NavListPropsSchema = z.object({
  /** Aria-label for the back scroll button */
  backScrollAriaLabel: z.string().optional(),
  /** Children nodes */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list */
  className: z.string().optional(),
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel: z.string().optional()
})

export type NavListPropsProps = z.infer<typeof NavListPropsSchema>
