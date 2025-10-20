// Auto-generated Zod schema for Radio
import { z } from 'zod'

export const RadioSchema = z.object({
  /** Aria label for the radio. */
  'aria-label': z.string().optional(),
  /** Body of the radio. */
  body: z.custom<React.ReactNode>().optional(),
  /** Flag to show if the radio is checked. */
  checked: z.boolean().optional(),
  /** Additional classes added to the radio wrapper. This wrapper will be div element by default. It will be a label element if
isLabelWrapped is true, or it can be overridden by any element specified in the component prop. */
  className: z.string().optional().default(''),
  /** Sets the radio wrapper component to render. Defaults to "div". If set to "label", behaves the same as if isLabelWrapped prop was specified. */
  component: z.unknown().optional(),
  /** Description text of the radio. */
  description: z.custom<React.ReactNode>().optional(),
  /** Id of the radio. */
  id: z.string(),
  /** Additional classes added to the radio input. */
  inputClassName: z.string().optional(),
  /** Flag to show if the radio is checked. */
  isChecked: z.boolean().optional(),
  /** Flag to show if the radio is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to indicate whether the radio wrapper element is a native label element for the radio input. Will not apply if a component prop (with a value other than a "label") is specified. */
  isLabelWrapped: z.boolean().optional(),
  /** Flag to show if the radio selection is valid or invalid. */
  isValid: z.boolean().optional().default(true),
  /** Label text of the radio. */
  label: z.custom<React.ReactNode>().optional(),
  /** Sets the position of the label. Defaults to 'end' (after the radio input). */
  labelPosition: z.enum(['start', 'end']).optional(),
  /** Name for group of radios */
  name: z.string(),
  /** A callback for when the radio selection changes. */
  onChange: z.custom<Event>().optional().default('() => {}'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional()
})

export type RadioProps = z.infer<typeof RadioSchema>
