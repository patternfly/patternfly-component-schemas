// Auto-generated Zod schema for MastheadLogo
import { z } from 'zod'

export const MastheadLogoSchema = z.object({
  /** Content rendered inside of the masthead logo. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead logo. */
  className: z.string().optional(),
  /** Component type of the masthead logo. */
  component: z.any().optional()
})

export type MastheadLogoProps = z.infer<typeof MastheadLogoSchema>
