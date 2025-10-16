// Auto-generated Zod schema for AboutModalBoxBrand
// Generated on: 2025-10-16T19:25:27.782Z
import { z } from 'zod'

export const AboutModalBoxBrandSchema = z.object({
  /** The alternate text of the brand image. */
  alt: z.string(),
  /** The URL of the image for the brand. */
  src: z.string()
})

export type AboutModalBoxBrandProps = z.infer<typeof AboutModalBoxBrandSchema>
