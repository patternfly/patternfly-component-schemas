// Auto-generated Zod schema for BackgroundImageProps
import { z } from 'zod'

export const BackgroundImagePropsSchema = z.object({
  /** Additional classes added to the background image. */
  className: z.string().optional(),
  /** The URL or file path of the image for the background */
  src: z.string()
})

export type BackgroundImagePropsProps = z.infer<typeof BackgroundImagePropsSchema>
