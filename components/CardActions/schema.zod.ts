// Auto-generated Zod schema for CardActions
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardActionsSchema = z.object({
  /** Content rendered inside the card action */
  children: z.any().optional(),
  /** Additional classes added to the action */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoOffset: z.boolean().optional().default(false)
})

export type CardActionsProps = z.infer<typeof CardActionsSchema>
