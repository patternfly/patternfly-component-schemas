// Auto-generated Zod schema for MultipleFileUploadTitleText
import { z } from 'zod'

export const MultipleFileUploadTitleTextSchema = z.object({
  /** Content rendered inside multiple file upload title text */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextProps = z.infer<typeof MultipleFileUploadTitleTextSchema>
