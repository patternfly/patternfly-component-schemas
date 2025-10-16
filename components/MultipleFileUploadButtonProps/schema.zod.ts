// Auto-generated Zod schema for MultipleFileUploadButtonProps
// Generated on: 2025-10-16T18:56:01.635Z
import { z } from 'zod'

export const MultipleFileUploadButtonPropsSchema = z.object({
  /** Visible text label for the button */
  browseButtonText: z.string().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Aria-label for the button */
  'Unknown': z.string().optional()
})

export type MultipleFileUploadButtonPropsProps = z.infer<typeof MultipleFileUploadButtonPropsSchema>
