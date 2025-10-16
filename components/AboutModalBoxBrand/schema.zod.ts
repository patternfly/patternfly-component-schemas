// Auto-generated Zod schema for AboutModalBoxBrand
// Generated on: 2025-10-16T18:45:33.887Z
import { z } from 'zod'

export const AboutModalBoxBrandSchema = z.object({
  /** The alternate text of the brand image. */
  alt: z.string(),
  /** The URL of the image for the brand. */
  src: z.string()
})

export type AboutModalBoxBrandProps = z.infer<typeof AboutModalBoxBrandSchema>
