// Auto-generated Zod schema for FormFieldGroup
import { z } from 'zod'

export const FormFieldGroupSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Form field group header */
  header: z.custom<React.ReactNode>().optional()
})

export type FormFieldGroupProps = z.infer<typeof FormFieldGroupSchema>
