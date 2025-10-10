// Auto-generated Zod schema for TextInputGroupMain
// Generated on: 2025-10-10T18:12:17.767Z
import { z } from 'zod'

export const TextInputGroupMainSchema = z.object({
  /** The id of the active element. Required if role has a value of "combobox", and focus
should remain on the input. */
  'aria-activedescendant': z.string().optional(),
  /** The id of the element(s) controlled by the input. Required if role has a value of "combobox". */
  'aria-controls': z.string().optional(),
  /** Accessibility label for the input */
  'aria-label': z.string().optional(),
  /** Content rendered inside the text input group main div */
  children: z.any().optional(),
  /** Additional classes applied to the text input group main container */
  className: z.string().optional(),
  /** Suggestion that will show up like a placeholder even with text in the input */
  hint: z.string().optional(),
  /** Icon to be shown on the left side of the text input group main container */
  icon: z.any().optional(),
  /** The id of the input element */
  inputId: z.string().optional(),
  /** Additional props to spread to the input element. */
  inputProps: z.any().optional(),
  /** Flag for whether an associated element controlled by the input is visible. Required if
role has a value of "combobox". */
  isExpanded: z.boolean().optional(),
  /** Name for the input */
  name: z.string().optional(),
  /** Callback for when focus is lost on the input field */
  onBlur: z.function().optional(),
  /** Callback for when there is a change in the input field */
  onChange: z.any().optional(),
  /** Callback for when the input field is focused */
  onFocus: z.function().optional(),
  /** Placeholder value for the input */
  placeholder: z.string().optional(),
  /** Determines the accessible role of the input. */
  role: z.string().optional(),
  /** Type that the input accepts. */
  type: z.enum(['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url']).optional(),
  /** Value for the input */
  value: z.any().optional()
})

export type TextInputGroupMainProps = z.infer<typeof TextInputGroupMainSchema>
