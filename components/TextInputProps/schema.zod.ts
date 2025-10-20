// Auto-generated Zod schema for TextInputProps
import { z } from 'zod'

export const TextInputPropsSchema = z.object({
  /** Additional classes added to the text input. */
  className: z.string().optional(),
  /** Custom icon to render. If the validated prop is also passed, this will render an icon in addition to a validated icon. */
  customIcon: z.custom<React.ReactNode>().optional(),
  /** Prop to apply expanded styling to the text input and link it to the element it is controlling. This should be used when the input controls a menu and that menu is expandable. */
  expandedProps: z.unknown().optional(),
  innerRef: z.unknown().optional(),
  /** Flag to show if the text input is disabled. */
  isDisabled: z.boolean().optional(),
  isExpanded: z.boolean().optional(),
  isLeftTruncated: z.boolean().optional(),
  /** Flag indicating whether the input is required */
  isRequired: z.boolean().optional(),
  /** Trim text at start */
  isStartTruncated: z.boolean().optional(),
  /** Callback function when text input is blurred (focus leaves) */
  onBlur: z.custom<(event?: any) => void>().optional(),
  /** A callback for when the text input value changes. */
  onChange: z.custom<Event>().optional(),
  /** Callback function when text input is focused */
  onFocus: z.custom<(event?: any) => void>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Placeholder of the text input when there is no value */
  placeholder: z.string().optional(),
  /** Sets the input as readonly and determines the readonly styling. */
  readOnlyVariant: z.enum(['plain', 'default']).optional(),
  /** Type that the text input accepts. */
  type: z.enum(['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url']).optional(),
  /** Aria-label. The text input requires an associated id or aria-label. */
  'Unknown': z.string().optional(),
  /** Value to indicate if the text input is modified to show that validation state.
If set to success, text input will be modified to indicate valid state.
If set to error, text input will be modified to indicate error state. */
  validated: z.enum(['success', 'warning', 'error', 'default']).optional(),
  /** Value of the text input. */
  value: z.any().optional()
})

export type TextInputPropsProps = z.infer<typeof TextInputPropsSchema>
