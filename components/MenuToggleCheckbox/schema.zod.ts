// Auto-generated Zod schema for MenuToggleCheckbox
import { z } from 'zod'

export const MenuToggleCheckboxSchema = z.object({
  /** Element to be rendered inside the <span> */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the MenuToggleCheckbox */
  className: z.string().optional(),
  /** Flag to set the default checked value of the checkbox when it is uncontrolled by React state.
To make the checkbox controlled instead use the isChecked prop, but do not use both. */
  defaultChecked: z.boolean().optional(),
  /** Id of the checkbox */
  id: z.string(),
  /** Flag to show if the checkbox is checked when it is controlled by React state.
To make the checkbox uncontrolled instead use the defaultChecked prop, but do not use both. */
  isChecked: z.any().optional(),
  /** Flag to show if the checkbox is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Flag to show if the checkbox selection is valid or invalid */
  isValid: z.boolean().optional().default(true),
  /** A callback for when the checkbox selection changes */
  onChange: z.custom<Event>().optional().default('() => undefined as any'),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional()
})

export type MenuToggleCheckboxProps = z.infer<typeof MenuToggleCheckboxSchema>
