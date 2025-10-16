// Auto-generated Zod schema for BackgroundImage
// Generated on: 2025-10-16T18:56:01.656Z
import { z } from 'zod'

export const BackgroundImageSchema = z.object({
  /** Additional classes added to the background image. */
  className: z.string().optional(),
  /** The URL or file path of the image for the background */
  src: z.string()
})

export type BackgroundImageProps = z.infer<typeof BackgroundImageSchema>
