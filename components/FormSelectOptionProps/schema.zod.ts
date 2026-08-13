// Auto-generated Zod schema for FormSelectOptionProps
import { z } from 'zod'

export const FormSelectOptionPropsSchema = z.object({
  /** additional classes added to the Select Option */
  className: z.string().optional(),
  /** flag indicating if the option is disabled */
  isDisabled: z.boolean().optional(),
  /** flag indicating if option will have placeholder styling applied when selected * */
  isPlaceholder: z.boolean().optional(),
  /** the label for the option */
  label: z.string(),
  /** the value for the option */
  value: z.unknown().optional()
})

export type FormSelectOptionPropsProps = z.infer<typeof FormSelectOptionPropsSchema>
