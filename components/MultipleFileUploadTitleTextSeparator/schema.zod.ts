// Auto-generated Zod schema for MultipleFileUploadTitleTextSeparator
// Generated on: 2025-10-10T18:12:17.776Z
import { z } from 'zod'

export const MultipleFileUploadTitleTextSeparatorSchema = z.object({
  /** Content rendered inside multiple file upload title text separator */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextSeparatorProps = z.infer<typeof MultipleFileUploadTitleTextSeparatorSchema>
