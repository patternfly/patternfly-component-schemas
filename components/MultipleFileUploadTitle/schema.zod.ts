// Auto-generated Zod schema for MultipleFileUploadTitle
// Generated on: 2025-10-10T18:12:17.776Z
import { z } from 'zod'

export const MultipleFileUploadTitleSchema = z.object({
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Content rendered inside the title icon div */
  icon: z.any().optional(),
  /** Content rendered inside the title text div */
  text: z.any().optional().default(''),
  /** Content rendered inside the title text separator div */
  textSeparator: z.any().optional().default('')
})

export type MultipleFileUploadTitleProps = z.infer<typeof MultipleFileUploadTitleSchema>
