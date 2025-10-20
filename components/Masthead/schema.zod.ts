// Auto-generated Zod schema for Masthead
import { z } from 'zod'

export const MastheadSchema = z.object({
  /** Content rendered inside of the masthead */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead */
  className: z.string().optional(),
  /** Display type at various breakpoints */
  display: z.record(z.unknown()).optional().default('{
  md: 'inline'
}'),
  /** Insets at various breakpoints */
  inset: z.record(z.unknown()).optional()
})

export type MastheadProps = z.infer<typeof MastheadSchema>
