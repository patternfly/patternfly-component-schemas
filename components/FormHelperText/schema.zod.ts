// Auto-generated Zod schema for FormHelperText
// Generated on: 2025-10-10T18:12:17.784Z
import { z } from 'zod'

export const FormHelperTextSchema = z.object({
  /** Content rendered inside the helper text wrapper */
  children: z.any().optional().default('null'),
  /** Additional classes added to the helper text wrapper */
  className: z.string().optional().default('')
})

export type FormHelperTextProps = z.infer<typeof FormHelperTextSchema>
