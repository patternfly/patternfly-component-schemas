// Auto-generated Zod schema for FileUploadHelperText
// Generated on: 2025-10-10T18:12:17.783Z
import { z } from 'zod'

export const FileUploadHelperTextSchema = z.object({
  /** Content to render inside the file upload helper text container. Typically this will be
the helper text component. */
  children: z.any(),
  /** Additional classes added to the file upload helper text container element. */
  className: z.string().optional()
})

export type FileUploadHelperTextProps = z.infer<typeof FileUploadHelperTextSchema>
