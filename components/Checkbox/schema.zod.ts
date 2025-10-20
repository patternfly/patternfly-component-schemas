// Auto-generated Zod schema for Checkbox
import { z } from 'zod'

export const CheckboxSchema = z.object({
  /** Aria-label of the checkbox. */
  'aria-label': z.string().optional(),
  /** Body text of the checkbox */
  body: z.custom<React.ReactNode>().optional(),
  checked: z.boolean().optional(),
  /** Additional classes added to the checkbox wrapper. This wrapper will be div element by default. It will be a label element if
isLabelWrapped is true, or it can be overridden by any element specified in the component prop. */
  className: z.string().optional().default(''),
  /** Sets the checkbox wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
  component: z.unknown().optional(),
  /** Description text of the checkbox. */
  description: z.custom<React.ReactNode>().optional(),
  /** Id of the checkbox. */
  id: z.string(),
  /** Additional classes added to the checkbox input. */
  inputClassName: z.string().optional(),
  /** Flag to show if the checkbox is checked. If null, the checkbox will be indeterminate (partially checked). */
  isChecked: z.any().optional().default(false),
  /** Flag to show if the checkbox is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to indicate whether the checkbox wrapper element is a <label> element for the checkbox input. Will not apply if a component prop (with a value other than a "label") is specified. */
  isLabelWrapped: z.boolean().optional().default(false),
  /** Flag to show if the checkbox is required. */
  isRequired: z.boolean().optional().default(false),
  /** Flag to show if the checkbox selection is valid or invalid. */
  isValid: z.boolean().optional().default(true),
  /** Label text of the checkbox. */
  label: z.custom<React.ReactNode>().optional(),
  /** Sets the position of the label. Defaults to 'end' (after the checkbox input). */
  labelPosition: z.enum(['start', 'end']).optional(),
  /** A callback for when the checkbox selection changes. */
  onChange: z.custom<Event>().optional().default('() => {}'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true)
})

export type CheckboxProps = z.infer<typeof CheckboxSchema>
