// Auto-generated Zod schema for MastheadLogo
import { z } from 'zod'

export const MastheadLogoSchema = z.object({
  /** Content rendered inside of the masthead logo. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead logo. */
  className: z.string().optional(),
  /** Component type of the masthead logo. */
  component: z.any().optional(),
  /** Flag indicating the logo is a compact variant. Used in docked layouts. */
  isCompact: z.boolean().optional().default(false)
})

export type MastheadLogoProps = z.infer<typeof MastheadLogoSchema>
