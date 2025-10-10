// Auto-generated Zod schema for HintBody
// Generated on: 2025-10-10T18:12:17.782Z
import { z } from 'zod'

export const HintBodySchema = z.object({
  /** Content rendered inside the hint body. */
  children: z.any().optional(),
  /** Additional classes applied to the hint body. */
  className: z.string().optional()
})

export type HintBodyProps = z.infer<typeof HintBodySchema>
