// Auto-generated Zod schema for ProgressHelperText
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const ProgressHelperTextSchema = z.object({
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  children: z.any().optional()
})

export type ProgressHelperTextProps = z.infer<typeof ProgressHelperTextSchema>
