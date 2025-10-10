// Auto-generated Zod schema for FormFieldGroup
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const FormFieldGroupSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.any().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Form field group header */
  header: z.any().optional()
})

export type FormFieldGroupProps = z.infer<typeof FormFieldGroupSchema>
