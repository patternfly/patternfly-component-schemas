// Auto-generated Zod schema for AboutModalBox
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const AboutModalBoxSchema = z.object({
  /** Content rendered inside the about modal box */
  children: z.any(),
  /** Additional classes added to the about modal box */
  className: z.string().optional()
})

export type AboutModalBoxProps = z.infer<typeof AboutModalBoxSchema>
