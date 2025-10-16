// Auto-generated Zod schema for FormFieldGroup
// Generated on: 2025-10-16T19:25:27.770Z
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
