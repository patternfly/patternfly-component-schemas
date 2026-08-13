// Auto-generated Zod schema for FormAlertProps
import { z } from 'zod'

export const FormAlertPropsSchema = z.object({
  /** An inline PatternFly Alert. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the FormGroup. */
  className: z.string().optional()
})

export type FormAlertPropsProps = z.infer<typeof FormAlertPropsSchema>
