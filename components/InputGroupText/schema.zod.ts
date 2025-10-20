// Auto-generated Zod schema for InputGroupText
import { z } from 'zod'

export const InputGroupTextSchema = z.object({
  /** Content rendered inside the input group text. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the input group text. */
  className: z.string().optional(),
  /** Component that wraps the input group text. */
  component: z.custom<React.ReactNode>().optional().default('span'),
  /** Flag to indicate if the input group text is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to to indicate if the input group item is plain. */
  isPlain: z.boolean().optional()
})

export type InputGroupTextProps = z.infer<typeof InputGroupTextSchema>
