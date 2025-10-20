// Auto-generated Zod schema for TextInputGroupMainProps
import { z } from 'zod'

export const TextInputGroupMainPropsSchema = z.object({
  /** Content rendered inside the text input group main div */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the text input group main container */
  className: z.string().optional(),
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint: z.string().optional(),
  /** Icon to be shown on the left side of the text input group main container */
  icon: z.custom<React.ReactNode>().optional(),
  innerRef: z.unknown().optional(),
  /** The id of the input element */
  inputId: z.string().optional(),
  /** Additional props to spread to the input element. */
  inputProps: z.unknown().optional(),
  /** Flag for whether an associated element controlled by the input is visible. Required if
role has a value of "combobox". */
  isExpanded: z.boolean().optional(),
  /** Name for the input */
  name: z.string().optional(),
  /** Callback for when focus is lost on the input field */
  onBlur: z.custom<(event?: any) => void>().optional(),
  /** Callback for when there is a change in the input field */
  onChange: z.custom<Event>().optional(),
  /** Callback for when the input field is focused */
  onFocus: z.custom<(event?: any) => void>().optional(),
  /** Placeholder value for the input */
  placeholder: z.string().optional(),
  /** Determines the accessible role of the input. */
  role: z.string().optional(),
  /** Type that the input accepts. */
  type: z.enum(['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url']).optional(),
  /** The id of the element(s) controlled by the input. Required if role has a value of "combobox". */
  'Unknown': z.string().optional(),
  /** Value for the input */
  value: z.any().optional()
})

export type TextInputGroupMainPropsProps = z.infer<typeof TextInputGroupMainPropsSchema>
