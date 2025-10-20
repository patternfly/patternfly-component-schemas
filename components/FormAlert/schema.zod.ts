// Auto-generated Zod schema for FormAlert
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const FormAlertSchema = z.object({
  /** An inline PatternFly Alert. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the FormGroup. */
  className: z.string().optional().default('')
})

export type FormAlertProps = z.infer<typeof FormAlertSchema>
