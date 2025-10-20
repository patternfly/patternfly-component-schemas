// Auto-generated Zod schema for BackgroundImage
import { z } from 'zod'

export const BackgroundImageSchema = z.object({
  /** Additional classes added to the background image. */
  className: z.string().optional(),
  /** The URL or file path of the image for the background */
  src: z.string()
})

export type BackgroundImageProps = z.infer<typeof BackgroundImageSchema>
