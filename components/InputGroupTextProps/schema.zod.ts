// Auto-generated Zod schema for InputGroupTextProps
import { z } from 'zod'

export const InputGroupTextPropsSchema = z.object({
  /** Content rendered inside the input group text. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the input group text. */
  className: z.string().optional(),
  /** Component that wraps the input group text. */
  component: z.custom<React.ReactNode>().optional(),
  /** Flag to indicate if the input group text is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to to indicate if the input group item is plain. */
  isPlain: z.boolean().optional()
})

export type InputGroupTextPropsProps = z.infer<typeof InputGroupTextPropsSchema>
