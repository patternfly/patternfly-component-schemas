// Auto-generated Zod schema for FormHelperTextProps
import { z } from 'zod'

export const FormHelperTextPropsSchema = z.object({
  /** Content rendered inside the helper text wrapper */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the helper text wrapper */
  className: z.string().optional()
})

export type FormHelperTextPropsProps = z.infer<typeof FormHelperTextPropsSchema>
