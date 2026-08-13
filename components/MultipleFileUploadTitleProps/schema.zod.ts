// Auto-generated Zod schema for MultipleFileUploadTitleProps
import { z } from 'zod'

export const MultipleFileUploadTitlePropsSchema = z.object({
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Content rendered inside the title icon div */
  icon: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the title text div */
  text: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the title text separator div */
  textSeparator: z.custom<React.ReactNode>().optional()
})

export type MultipleFileUploadTitlePropsProps = z.infer<typeof MultipleFileUploadTitlePropsSchema>
