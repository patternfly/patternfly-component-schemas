// Auto-generated Zod schema for NavItemSeparator
import { z } from 'zod'

export const NavItemSeparatorSchema = z.object({
  /** Additional classes added to the divider */
  className: z.string().optional(),
  /** The component type to use */
  component: z.enum(['hr', 'li', 'div']).optional().default('li'),
  /** Insets at various breakpoints. */
  inset: z.record(z.unknown()).optional(),
  /** Indicates how the divider will display at various breakpoints. Vertical divider must be in a flex layout. */
  orientation: z.record(z.unknown()).optional(),
  /** The ARIA role of the divider when the component property has a value other than "hr". */
  role: z.enum(['separator', 'presentation']).optional().default('presentation')
})

export type NavItemSeparatorProps = z.infer<typeof NavItemSeparatorSchema>
