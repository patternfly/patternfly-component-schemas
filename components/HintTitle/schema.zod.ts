// Auto-generated Zod schema for HintTitle
// Generated on: 2025-10-10T18:12:17.782Z
import { z } from 'zod'

export const HintTitleSchema = z.object({
  /** Content rendered inside the hint title. */
  children: z.any().optional(),
  /** Additional classes applied to the hint title. */
  className: z.string().optional()
})

export type HintTitleProps = z.infer<typeof HintTitleSchema>
