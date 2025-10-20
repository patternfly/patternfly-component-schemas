// Auto-generated Zod schema for MultipleFileUploadTitleIcon
// Generated on: 2025-10-10T18:12:17.776Z
import { z } from 'zod'

export const MultipleFileUploadTitleIconSchema = z.object({
  /** Content rendered inside multiple file upload title icon */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadTitleIconProps = z.infer<typeof MultipleFileUploadTitleIconSchema>
