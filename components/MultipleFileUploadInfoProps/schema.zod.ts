// Auto-generated Zod schema for MultipleFileUploadInfoProps
import { z } from 'zod'

export const MultipleFileUploadInfoPropsSchema = z.object({
  /** Content rendered inside multiple file upload info */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadInfoPropsProps = z.infer<typeof MultipleFileUploadInfoPropsSchema>
