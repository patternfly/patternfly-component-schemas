// Auto-generated Zod schema for MastheadProps
import { z } from 'zod'

export const MastheadPropsSchema = z.object({
  /** Content rendered inside of the masthead */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead */
  className: z.string().optional(),
  /** Display type at various breakpoints */
  display: z.record(z.unknown()).optional(),
  /** Insets at various breakpoints */
  inset: z.record(z.unknown()).optional()
})

export type MastheadPropsProps = z.infer<typeof MastheadPropsSchema>
