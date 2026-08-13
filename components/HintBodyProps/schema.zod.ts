// Auto-generated Zod schema for HintBodyProps
import { z } from 'zod'

export const HintBodyPropsSchema = z.object({
  /** Content rendered inside the hint body. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint body. */
  className: z.string().optional()
})

export type HintBodyPropsProps = z.infer<typeof HintBodyPropsSchema>
