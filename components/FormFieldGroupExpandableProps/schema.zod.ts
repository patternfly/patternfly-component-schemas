// Auto-generated Zod schema for FormFieldGroupExpandableProps
import { z } from 'zod'

export const FormFieldGroupExpandablePropsSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Flag indicating whether an expandable form field group has animations. This will always render
nested field group content rather than dynamically rendering them. This prop will be removed in
the next breaking change release in favor of defaulting to always-rendered items. */
  hasAnimations: z.boolean().optional(),
  /** Form field group header */
  header: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if the form field group is initially expanded */
  isExpanded: z.boolean().optional(),
  /** Aria-label to use on the form field group toggle button */
  toggleAriaLabel: z.string().optional()
})

export type FormFieldGroupExpandablePropsProps = z.infer<typeof FormFieldGroupExpandablePropsSchema>
