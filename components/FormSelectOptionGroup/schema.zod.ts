// Auto-generated Zod schema for FormSelectOptionGroup
// Generated on: 2025-10-10T18:12:17.783Z
import { z } from 'zod'

export const FormSelectOptionGroupSchema = z.object({
  /** content rendered inside the Select Option Group */
  children: z.any().optional().default('null'),
  /** additional classes added to the Select Option */
  className: z.string().optional().default(''),
  /** flag indicating if the Option Group is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** the label for the option */
  label: z.string()
})

export type FormSelectOptionGroupProps = z.infer<typeof FormSelectOptionGroupSchema>
