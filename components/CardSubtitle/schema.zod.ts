// Auto-generated Zod schema for CardSubtitle
import { z } from 'zod'

export const CardSubtitleSchema = z.object({
  /** Content rendered inside the description. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Id of the description. */
  id: z.string().optional().default('')
})

export type CardSubtitleProps = z.infer<typeof CardSubtitleSchema>
