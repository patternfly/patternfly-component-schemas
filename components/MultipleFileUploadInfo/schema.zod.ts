// Auto-generated Zod schema for MultipleFileUploadInfo
// Generated on: 2025-10-10T18:12:17.776Z
import { z } from 'zod'

export const MultipleFileUploadInfoSchema = z.object({
  /** Content rendered inside multiple file upload info */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadInfoProps = z.infer<typeof MultipleFileUploadInfoSchema>
