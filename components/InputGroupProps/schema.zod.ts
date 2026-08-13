// Auto-generated Zod schema for InputGroupProps
import { z } from 'zod'

export const InputGroupPropsSchema = z.object({
  /** Content rendered inside the input group. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the input group. */
  className: z.string().optional(),
  innerRef: z.unknown().optional()
})

export type InputGroupPropsProps = z.infer<typeof InputGroupPropsSchema>
