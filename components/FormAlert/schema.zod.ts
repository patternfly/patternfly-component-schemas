// Auto-generated Zod schema for FormAlert
import { z } from 'zod'

export const FormAlertSchema = z.object({
  /** An inline PatternFly Alert. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the FormGroup. */
  className: z.string().optional().default('')
})

export type FormAlertProps = z.infer<typeof FormAlertSchema>
