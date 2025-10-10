// Auto-generated Zod schema for FormSelect
// Generated on: 2025-10-10T18:12:17.783Z
import { z } from 'zod'

export const FormSelectSchema = z.object({
  /** Custom flag to show that the FormSelect requires an associated id or aria-label. */
  'aria-label': z.string().optional(),
  /** content rendered inside the FormSelect */
  children: z.any(),
  /** additional classes added to the FormSelect control */
  className: z.string().optional().default(''),
  /** Flag indicating the FormSelect is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Sets the FormSelect required. */
  isRequired: z.boolean().optional().default(false),
  /** Optional callback for updating when selection loses focus */
  onBlur: z.any().optional().default('(): any => undefined'),
  /** Optional callback for updating when selection changes */
  onChange: z.any().optional().default('(): any => undefined'),
  /** Optional callback for updating when selection gets focus */
  onFocus: z.any().optional().default('(): any => undefined'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional().default(true),
  /** Value to indicate if the select is modified to show that validation state.
If set to success, select will be modified to indicate valid state.
If set to error, select will be modified to indicate error state. */
  validated: z.enum(['success', 'warning', 'error', 'default']).optional().default('default'),
  /** value of selected option */
  value: z.any().optional().default('')
})

export type FormSelectProps = z.infer<typeof FormSelectSchema>
