// Auto-generated Zod schema for FormSelectOptionGroupProps
import { z } from 'zod'

export const FormSelectOptionGroupPropsSchema = z.object({
  /** content rendered inside the Select Option Group */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Select Option */
  className: z.string().optional(),
  /** flag indicating if the Option Group is disabled */
  isDisabled: z.boolean().optional(),
  /** the label for the option */
  label: z.string()
})

export type FormSelectOptionGroupPropsProps = z.infer<typeof FormSelectOptionGroupPropsSchema>
