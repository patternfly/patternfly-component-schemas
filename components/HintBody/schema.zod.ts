// Auto-generated Zod schema for HintBody
import { z } from 'zod'

export const HintBodySchema = z.object({
  /** Content rendered inside the hint body. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint body. */
  className: z.string().optional()
})

export type HintBodyProps = z.infer<typeof HintBodySchema>
