// Auto-generated Zod schema for MultipleFileUploadTitleText
// Generated on: 2025-10-10T18:12:17.776Z
import { z } from 'zod'

export const MultipleFileUploadTitleTextSchema = z.object({
  /** Content rendered inside multiple file upload title text */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleTextProps = z.infer<typeof MultipleFileUploadTitleTextSchema>
