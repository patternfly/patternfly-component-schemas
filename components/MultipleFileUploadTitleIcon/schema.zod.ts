// Auto-generated Zod schema for MultipleFileUploadTitleIcon
import { z } from 'zod'

export const MultipleFileUploadTitleIconSchema = z.object({
  /** Content rendered inside multiple file upload title icon */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleIconProps = z.infer<typeof MultipleFileUploadTitleIconSchema>
