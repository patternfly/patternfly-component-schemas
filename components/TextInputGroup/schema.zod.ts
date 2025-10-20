// Auto-generated Zod schema for TextInputGroup
import { z } from 'zod'

export const TextInputGroupSchema = z.object({
  /** Content rendered inside the text input group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the text input group container */
  className: z.string().optional(),
  /** Adds disabled styling and a disabled context value which text input group main hooks into for the input itself */
  isDisabled: z.boolean().optional(),
  /** Flag to indicate the toggle has no border or background */
  isPlain: z.boolean().optional(),
  /** Status variant of the text input group. */
  validated: z.enum(['success', 'warning', 'error']).optional()
})

export type TextInputGroupProps = z.infer<typeof TextInputGroupSchema>
