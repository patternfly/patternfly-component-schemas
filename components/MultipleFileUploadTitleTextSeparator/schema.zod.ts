// Auto-generated Zod schema for MultipleFileUploadTitleTextSeparator
import { z } from 'zod'

export const MultipleFileUploadTitleTextSeparatorSchema = z.object({
  /** Content rendered inside multiple file upload title text separator */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextSeparatorProps = z.infer<typeof MultipleFileUploadTitleTextSeparatorSchema>
