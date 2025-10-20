// Auto-generated Zod schema for MultipleFileUploadStatus
import { z } from 'zod'

export const MultipleFileUploadStatusSchema = z.object({
  /** Adds an accessible label to the list of status items. */
  'aria-label': z.string().optional(),
  /** Content rendered inside multi file upload status list */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Icon to show in the status toggle */
  statusToggleIcon: z.enum(['danger', 'success', 'inProgress']).optional(),
  /** String to show in the status toggle */
  statusToggleText: z.string().optional()
})

export type MultipleFileUploadStatusProps = z.infer<typeof MultipleFileUploadStatusSchema>
