// Auto-generated Zod schema for MultipleFileUploadInfo
import { z } from 'zod'

export const MultipleFileUploadInfoSchema = z.object({
  /** Content rendered inside multiple file upload info */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadInfoProps = z.infer<typeof MultipleFileUploadInfoSchema>
