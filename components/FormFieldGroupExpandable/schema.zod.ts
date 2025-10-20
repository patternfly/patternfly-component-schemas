// Auto-generated Zod schema for FormFieldGroupExpandable
import { z } from 'zod'

export const FormFieldGroupExpandableSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Form field group header */
  header: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if the form field group is initially expanded */
  isExpanded: z.boolean().optional().default(false),
  /** Aria-label to use on the form field group toggle button */
  toggleAriaLabel: z.string().optional()
})

export type FormFieldGroupExpandableProps = z.infer<typeof FormFieldGroupExpandableSchema>
