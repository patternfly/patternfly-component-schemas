// Auto-generated Zod schema for InternalFormFieldGroupProps
import { z } from 'zod'

export const InternalFormFieldGroupPropsSchema = z.object({
  /** Anything that can be rendered as form field group content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the form field group. */
  className: z.string().optional(),
  /** Flag indicating whether an expandable form field group has animations. This will always render
nested field group content rather than dynamically rendering them. This prop will be removed in
the next breaking change release in favor of defaulting to always-rendered items. */
  hasAnimations: z.boolean().optional(),
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

export type InternalFormFieldGroupPropsProps = z.infer<typeof InternalFormFieldGroupPropsSchema>
