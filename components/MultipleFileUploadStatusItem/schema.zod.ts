// Auto-generated Zod schema for MultipleFileUploadStatusItem
import { z } from 'zod'

export const MultipleFileUploadStatusItemSchema = z.object({
  /** Adds accessibility text to the status item deletion button */
  buttonAriaLabel: z.string().optional().default('Remove from list'),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** A callback to process file reading in a custom way */
  customFileHandler: z.custom<(file: File) => void>().optional(),
  /** The file object being represented by the status item */
  file: z.unknown().optional(),
  /** A custom icon to show in place of the generic file icon */
  fileIcon: z.custom<React.ReactNode>().optional(),
  /** A custom name to display for the file rather than using built in functionality to auto-fill it */
  fileName: z.string().optional(),
  /** A custom file size to display for the file rather than using built in functionality to auto-fill it */
  fileSize: z.number().optional(),
  /** Clear button was clicked */
  onClearClick: z.custom<Event>().optional().default('() => {}'),
  /** A callback for when the FileReader API fails */
  onReadFail: z.custom<(error: DOMException, onReadFail: File) => void>().optional().default('() => {}'),
  /** A callback for when a selected file finishes loading */
  onReadFinished: z.custom<(fileHandle: File) => void>().optional().default('() => {}'),
  /** A callback for when a selected file starts loading */
  onReadStarted: z.custom<(fileHandle: File) => void>().optional().default('() => {}'),
  /** A callback for when the FileReader successfully reads the file */
  onReadSuccess: z.custom<(data: string, file: File) => void>().optional().default('() => {}'),
  /** Adds accessible text to the progress bar. Required when title not used and there is not any label associated with the progress bar */
  progressAriaLabel: z.string().optional(),
  /** Associates the progress bar with it's label for accessibility purposes. Required when title not used */
  progressAriaLabelledBy: z.string().optional(),
  /** Modifies the text announced by assistive technologies when the progress bar updates. */
  progressAriaLiveMessage: z.any().optional(),
  /** Additional content related to the status item. */
  progressHelperText: z.custom<React.ReactNode>().optional(),
  /** Unique identifier for progress. Generated if not specified. */
  progressId: z.string().optional(),
  /** A custom value to display for the progress component rather than using built in functionality to auto-fill it */
  progressValue: z.number().optional(),
  /** A custom variant to apply to the progress component rather than using built in functionality to auto-fill it */
  progressVariant: z.enum(['danger', 'success', 'warning']).optional()
})

export type MultipleFileUploadStatusItemProps = z.infer<typeof MultipleFileUploadStatusItemSchema>
