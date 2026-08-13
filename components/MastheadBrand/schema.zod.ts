// Auto-generated Zod schema for MastheadBrand
import { z } from 'zod'

export const MastheadBrandSchema = z.object({
  /** Content rendered inside of the masthead brand. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead brand. */
  className: z.string().optional()
})

export type MastheadBrandProps = z.infer<typeof MastheadBrandSchema>
