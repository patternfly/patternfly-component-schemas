// Auto-generated Zod schema for ButtonProps
import { z } from 'zod'

export const ButtonPropsSchema = z.object({
  /** Content rendered inside the button */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the button */
  className: z.string().optional(),
  /** Sets the base component to render. defaults to button */
  component: z.any().optional(),
  /** Adds count number to button */
  countOptions: z.unknown().optional(),
  /** Applies no padding on a plain button variant. Use when plain button is placed inline with text */
  hasNoPadding: z.boolean().optional(),
  /** Icon for the button. */
  icon: z.any().optional(),
  /** Sets position of the icon. Note: "left" and "right" are deprecated. Use "start" and "end" instead */
  iconPosition: z.enum(['start', 'end', 'left', 'right']).optional(),
  innerRef: z.unknown().optional(),
  /** Events to prevent when the button is in an aria-disabled state */
  inoperableEvents: z.array(z.string()).optional(),
  /** Adds disabled styling and communicates that the button is disabled using the aria-disabled html attribute */
  isAriaDisabled: z.boolean().optional(),
  /** Adds block styling to button */
  isBlock: z.boolean().optional(),
  /** Adds clicked styling to button. */
  isClicked: z.boolean().optional(),
  /** Adds danger styling to secondary or link button variants */
  isDanger: z.boolean().optional(),
  /** Adds disabled styling and disables the button using the disabled html attribute */
  isDisabled: z.boolean().optional(),
  /** Adds inline styling to a link button */
  isInline: z.boolean().optional(),
  /** Adds progress styling to button */
  isLoading: z.boolean().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Adds styling which affects the size of the button */
  size: z.enum(['default', 'sm', 'lg']).optional(),
  /** Accessible label for the spinner to describe what is loading */
  spinnerAriaLabel: z.string().optional(),
  /** Id of element which describes what is being loaded */
  spinnerAriaLabelledBy: z.string().optional(),
  /** Text describing that current loading status or progress */
  spinnerAriaValueText: z.string().optional(),
  /** Sets state of the stateful button variant. Default is "unread" */
  state: z.enum(['read', 'unread', 'attention']).optional(),
  /** Sets the button tabindex. */
  tabIndex: z.number().optional(),
  /** Sets button type */
  type: z.enum(['button', 'submit', 'reset']).optional(),
  /** Adds accessible text to the button. */
  'Unknown': z.string().optional(),
  /** Adds button variant styles */
  variant: z.enum(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'link', 'plain', 'control', 'stateful']).optional()
})

export type ButtonPropsProps = z.infer<typeof ButtonPropsSchema>
