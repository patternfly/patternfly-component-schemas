// Auto-generated Zod schema for ProgressHelperText
import { z } from 'zod'

export const ProgressHelperTextSchema = z.object({
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  children: z.custom<React.ReactNode>().optional()
})

export type ProgressHelperTextProps = z.infer<typeof ProgressHelperTextSchema>
