// Auto-generated Zod schema for SwitchProps
import { z } from 'zod'

export const SwitchPropsSchema = z.object({
  /** Additional classes added to the switch */
  className: z.string().optional(),
  /** Flag to set the default checked value of the switch when it is uncontrolled by React state.
To make the switch controlled instead use the isChecked prop, but do not use both. */
  defaultChecked: z.boolean().optional(),
  /** Flag to show if the switch has a check icon. */
  hasCheckIcon: z.boolean().optional(),
  /** id for the label. */
  id: z.string().optional(),
  /** Flag to show if the switch is checked when it is controlled by React state.
To make the switch uncontrolled instead use the defaultChecked prop, but do not use both. */
  isChecked: z.boolean().optional(),
  /** Flag to show if the switch is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to reverse the layout of toggle and label (label at start, toggle at end). */
  isReversed: z.boolean().optional(),
  /** Text value for the visible label */
  label: z.custom<React.ReactNode>().optional(),
  /** A callback for when the switch selection changes. (event, isChecked) => {} */
  onChange: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Adds an accessible name to the switch via one or more referenced id(s). The computed accessible name must describe the isChecked="true" state. */
  'Unknown': z.string().optional()
})

export type SwitchPropsProps = z.infer<typeof SwitchPropsSchema>
