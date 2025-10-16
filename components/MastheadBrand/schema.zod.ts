// Auto-generated Zod schema for MastheadBrand
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MastheadBrandSchema = z.object({
  /** Content rendered inside of the masthead brand. */
  children: z.any().optional(),
  /** Additional classes added to the masthead brand. */
  className: z.string().optional()
})

export type MastheadBrandProps = z.infer<typeof MastheadBrandSchema>
