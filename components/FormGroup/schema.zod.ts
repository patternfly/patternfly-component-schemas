// Auto-generated Zod schema for FormGroup
import { z } from 'zod'

export const FormGroupSchema = z.object({
  /** Anything that can be rendered as FormGroup content. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the FormGroup. */
  className: z.string().optional().default(''),
  /** ID of an individual field or a group of multiple fields. Required when a role of "group" or "radiogroup" is passed in.
If only one field is included, its ID attribute and this prop must be the same. */
  fieldId: z.string().optional(),
  /** Removes top spacer from label. */
  hasNoPaddingTop: z.boolean().optional().default(false),
  /** Sets the FormGroup isInline. */
  isInline: z.boolean().optional().default(false),
  /** Sets the FormGroup required. */
  isRequired: z.boolean().optional().default(false),
  /** Sets the FormGroupControl to be stacked */
  isStack: z.boolean().optional().default(false),
  /** Label text before the field. */
  label: z.custom<React.ReactNode>().optional(),
  /** A help button for the label. We recommend using FormGroupLabelHelp element as a help icon button. The help button should be wrapped or linked to our popover component. */
  labelHelp: z.custom<React.ReactElement>().optional(),
  /** Additional label information displayed after the label. */
  labelInfo: z.custom<React.ReactNode>().optional(),
  /** Sets the role of the form group. Pass in "radiogroup" when the form group contains multiple
radio inputs, or pass in "group" when the form group contains multiple of any other input type. */
  role: z.string().optional()
})

export type FormGroupProps = z.infer<typeof FormGroupSchema>
