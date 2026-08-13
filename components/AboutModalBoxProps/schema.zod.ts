// Auto-generated Zod schema for AboutModalBoxProps
import { z } from 'zod'

export const AboutModalBoxPropsSchema = z.object({
  /** Content rendered inside the about modal box */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the about modal box */
  className: z.string().optional()
})

export type AboutModalBoxPropsProps = z.infer<typeof AboutModalBoxPropsSchema>
