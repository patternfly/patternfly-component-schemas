// Auto-generated Zod schema for FormSelectProps
import { z } from 'zod'

export const FormSelectPropsSchema = z.object({
  /** content rendered inside the FormSelect */
  children: z.custom<React.ReactNode>(),
  /** additional classes added to the FormSelect control */
  className: z.string().optional(),
  /** Flag indicating the FormSelect is disabled */
  isDisabled: z.boolean().optional(),
  /** Sets the FormSelect required. */
  isRequired: z.boolean().optional(),
  /** Optional callback for updating when selection loses focus */
  onBlur: z.custom<Event>().optional(),
  /** Optional callback for updating when selection changes */
  onChange: z.custom<Event>().optional(),
  /** Optional callback for updating when selection gets focus */
  onFocus: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Custom flag to show that the FormSelect requires an associated id or aria-label. */
  'Unknown': z.string().optional(),
  /** Value to indicate if the select is modified to show that validation state.
If set to success, select will be modified to indicate valid state.
If set to error, select will be modified to indicate error state. */
  validated: z.enum(['success', 'warning', 'error', 'default']).optional(),
  /** value of selected option */
  value: z.unknown().optional()
})

export type FormSelectPropsProps = z.infer<typeof FormSelectPropsSchema>
