// Auto-generated Zod schema for MultipleFileUpload
// Generated on: 2025-10-10T18:12:17.777Z
import { z } from 'zod'

export const MultipleFileUploadSchema = z.object({
  /** Content rendered inside the multi upload field */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Optional extra props to customize react-dropzone. */
  dropzoneProps: z.any().optional().default('{}'),
  /** Flag setting the component to horizontal styling mode */
  isHorizontal: z.boolean().optional(),
  /** When files are dropped or uploaded this callback will be called with all accepted files */
  onFileDrop: z.array(z.any()).optional().default('() => {}')
})

export type MultipleFileUploadProps = z.infer<typeof MultipleFileUploadSchema>
