// Auto-generated Zod schema for CardSubtitleProps
import { z } from 'zod'

export const CardSubtitlePropsSchema = z.object({
  /** Content rendered inside the description. */
  children: z.custom<React.ReactNode>().optional(),
  /** Id of the description. */
  id: z.string().optional()
})

export type CardSubtitlePropsProps = z.infer<typeof CardSubtitlePropsSchema>
