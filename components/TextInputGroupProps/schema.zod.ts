// Auto-generated Zod schema for TextInputGroupProps
import { z } from 'zod'

export const TextInputGroupPropsSchema = z.object({
  /** Content rendered inside the text input group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the text input group container */
  className: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  isDisabled: z.boolean().optional(),
  /** Flag to indicate the toggle has no border or background */
  isPlain: z.boolean().optional(),
  /** Value to indicate if the text input group is modified to show that validation state.
If set to success, warning, or error, the group will show that state.
If set to default, no validation styling is applied (use to clear a prior validation state). */
  validated: z.enum(['success', 'warning', 'error', 'default']).optional()
})

export type TextInputGroupPropsProps = z.infer<typeof TextInputGroupPropsSchema>
