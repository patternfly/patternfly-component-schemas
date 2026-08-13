// Auto-generated Zod schema for AboutModalBox
import { z } from 'zod'

export const AboutModalBoxSchema = z.object({
  /** Content rendered inside the about modal box */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the about modal box */
  className: z.string().optional()
})

export type AboutModalBoxProps = z.infer<typeof AboutModalBoxSchema>
