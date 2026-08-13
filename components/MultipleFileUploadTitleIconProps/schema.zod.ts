// Auto-generated Zod schema for MultipleFileUploadTitleIconProps
import { z } from 'zod'

export const MultipleFileUploadTitleIconPropsSchema = z.object({
  /** Content rendered inside multiple file upload title icon */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleIconPropsProps = z.infer<typeof MultipleFileUploadTitleIconPropsSchema>
