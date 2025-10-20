// Auto-generated Zod schema for InternalFormFieldGroup
import { z } from 'zod'

export const InternalFormFieldGroupSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Form field group header */
  header: z.unknown().optional(),
  /** Flag indicating if the field group is expandable */
  isExpandable: z.boolean().optional(),
  /** Flag indicate if the form field group is expanded. Modifies the card to be expandable. */
  isExpanded: z.boolean().optional(),
  /** Function callback called when user clicks toggle button */
  onToggle: z.custom<() => void>().optional(),
  /** Aria-label to use on the form field group toggle button */
  toggleAriaLabel: z.string().optional()
})

export type InternalFormFieldGroupProps = z.infer<typeof InternalFormFieldGroupSchema>
