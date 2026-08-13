// Auto-generated Zod schema for MastheadLogoProps
import { z } from 'zod'

export const MastheadLogoPropsSchema = z.object({
  /** Content rendered inside of the masthead logo. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead logo. */
  className: z.string().optional(),
  /** Component type of the masthead logo. */
  component: z.any().optional(),
  isCompact: z.boolean().optional()
})

export type MastheadLogoPropsProps = z.infer<typeof MastheadLogoPropsSchema>
