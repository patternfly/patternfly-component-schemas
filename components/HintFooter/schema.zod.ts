// Auto-generated Zod schema for HintFooter
// Generated on: 2025-10-10T18:12:17.782Z
import { z } from 'zod'

export const HintFooterSchema = z.object({
  /** Content rendered inside the hint footer. */
  children: z.any().optional(),
  /** Additional classes applied to the hint footer. */
  className: z.string().optional()
})

export type HintFooterProps = z.infer<typeof HintFooterSchema>
