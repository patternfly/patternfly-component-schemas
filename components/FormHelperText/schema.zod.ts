// Auto-generated Zod schema for FormHelperText
import { z } from 'zod'

export const FormHelperTextSchema = z.object({
  /** Content rendered inside the helper text wrapper */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the helper text wrapper */
  className: z.string().optional().default('')
})

export type FormHelperTextProps = z.infer<typeof FormHelperTextSchema>
