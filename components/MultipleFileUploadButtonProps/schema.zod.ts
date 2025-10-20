// Auto-generated Zod schema for MultipleFileUploadButtonProps
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
