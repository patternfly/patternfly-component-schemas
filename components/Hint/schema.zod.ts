// Auto-generated Zod schema for Hint
// Generated on: 2025-10-10T18:12:17.782Z
import { z } from 'zod'

export const HintSchema = z.object({
  /** Actions of the hint. */
  actions: z.any().optional(),
  /** Content rendered inside the hint. */
  children: z.any().optional(),
  /** Additional classes applied to the hint. */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoActionsOffset: z.boolean().optional().default(false)
})

export type HintProps = z.infer<typeof HintSchema>
