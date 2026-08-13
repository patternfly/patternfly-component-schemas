// Auto-generated Zod schema for FileUploadHelperTextProps
import { z } from 'zod'

export const FileUploadHelperTextPropsSchema = z.object({
  /** Content to render inside the file upload helper text container. Typically this will be
the helper text component. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the file upload helper text container element. */
  className: z.string().optional()
})

export type FileUploadHelperTextPropsProps = z.infer<typeof FileUploadHelperTextPropsSchema>
