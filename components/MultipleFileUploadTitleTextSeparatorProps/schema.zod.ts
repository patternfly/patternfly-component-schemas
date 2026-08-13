// Auto-generated Zod schema for MultipleFileUploadTitleTextSeparatorProps
import { z } from 'zod'

export const MultipleFileUploadTitleTextSeparatorPropsSchema = z.object({
  /** Content rendered inside multiple file upload title text separator */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextSeparatorPropsProps = z.infer<typeof MultipleFileUploadTitleTextSeparatorPropsSchema>
