// Auto-generated Zod schema for DividerProps
import { z } from 'zod'

export const DividerPropsSchema = z.object({
  /** Additional classes added to the divider */
  className: z.string().optional(),
  /** The component type to use */
  component: z.enum(['hr', 'li', 'div']).optional(),
  /** Insets at various breakpoints. */
  inset: z.record(z.unknown()).optional(),
  /** Indicates how the divider will display at various breakpoints. Vertical divider must be in a flex layout. */
  orientation: z.record(z.unknown()).optional()
})

export type DividerPropsProps = z.infer<typeof DividerPropsSchema>
