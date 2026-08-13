// Auto-generated Zod schema for AboutModalBoxBrandProps
import { z } from 'zod'

export const AboutModalBoxBrandPropsSchema = z.object({
  /** The alternate text of the brand image. */
  alt: z.string(),
  /** The URL of the image for the brand. */
  src: z.string()
})

export type AboutModalBoxBrandPropsProps = z.infer<typeof AboutModalBoxBrandPropsSchema>
