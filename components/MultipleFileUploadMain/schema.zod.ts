// Auto-generated Zod schema for MultipleFileUploadMain
// Generated on: 2025-10-16T19:02:51.738Z
import { z } from 'zod'

export const MultipleFileUploadMainSchema = z.object({
  /** Visible text label for the upload button */
  browseButtonText: z.string().optional().default('Upload'),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Content rendered inside the info div */
  infoText: z.custom<React.ReactNode>().optional(),
  /** Flag to prevent the upload button from being rendered */
  isUploadButtonHidden: z.boolean().optional(),
  /** Content rendered inside the title icon div */
  titleIcon: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the title text div */
  titleText: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the title text separator div */
  titleTextSeparator: z.custom<React.ReactNode>().optional()
})

export type MultipleFileUploadMainProps = z.infer<typeof MultipleFileUploadMainSchema>
