// Auto-generated Zod schema for Hint
import { z } from 'zod'

export const HintSchema = z.object({
  /** Actions of the hint. */
  actions: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the hint. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the hint. */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoActionsOffset: z.boolean().optional().default(false)
})

export type HintProps = z.infer<typeof HintSchema>
