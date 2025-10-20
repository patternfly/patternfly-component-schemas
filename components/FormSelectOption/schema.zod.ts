// Auto-generated Zod schema for FormSelectOption
import { z } from 'zod'

export const FormSelectOptionSchema = z.object({
  /** additional classes added to the Select Option */
  className: z.string().optional().default(''),
  /** flag indicating if the option is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** flag indicating if option will have placeholder styling applied when selected * */
  isPlaceholder: z.boolean().optional().default(false),
  /** the label for the option */
  label: z.string(),
  /** the value for the option */
  value: z.unknown().optional().default('')
})

export type FormSelectOptionProps = z.infer<typeof FormSelectOptionSchema>
