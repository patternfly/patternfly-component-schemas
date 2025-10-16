// Auto-generated Zod schema for MultipleFileUploadButton
// Generated on: 2025-10-16T19:02:51.738Z
import { z } from 'zod'

export const MultipleFileUploadButtonSchema = z.object({
  /** Aria-label for the button */
  'aria-label': z.string().optional(),
  /** Visible text label for the button */
  browseButtonText: z.string().optional().default('Upload'),
  /** Class to add to outer div */
  className: z.string().optional()
})

export type MultipleFileUploadButtonProps = z.infer<typeof MultipleFileUploadButtonSchema>
