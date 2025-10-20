// Auto-generated Zod schema for MultipleFileUploadStatusProps
import { z } from 'zod'

export const MultipleFileUploadStatusPropsSchema = z.object({
  /** Content rendered inside multi file upload status list */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Icon to show in the status toggle */
  statusToggleIcon: z.enum(['danger', 'success', 'inProgress']).optional(),
  /** String to show in the status toggle */
  statusToggleText: z.string().optional(),
  /** Adds an accessible label to the list of status items. */
  'Unknown': z.string().optional()
})

export type MultipleFileUploadStatusPropsProps = z.infer<typeof MultipleFileUploadStatusPropsSchema>
