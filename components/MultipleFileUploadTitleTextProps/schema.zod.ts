// Auto-generated Zod schema for MultipleFileUploadTitleTextProps
import { z } from 'zod'

export const MultipleFileUploadTitleTextPropsSchema = z.object({
  /** Content rendered inside multiple file upload title text */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextPropsProps = z.infer<typeof MultipleFileUploadTitleTextPropsSchema>
