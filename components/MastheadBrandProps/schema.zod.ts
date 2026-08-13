// Auto-generated Zod schema for MastheadBrandProps
import { z } from 'zod'

export const MastheadBrandPropsSchema = z.object({
  /** Content rendered inside of the masthead brand. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead brand. */
  className: z.string().optional()
})

export type MastheadBrandPropsProps = z.infer<typeof MastheadBrandPropsSchema>
