// Auto-generated Zod schema for FormFieldGroupProps
import { z } from 'zod'

export const FormFieldGroupPropsSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Form field group header */
  header: z.custom<React.ReactNode>().optional()
})

export type FormFieldGroupPropsProps = z.infer<typeof FormFieldGroupPropsSchema>
