// Auto-generated Zod schema for CardSelectableActions
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardSelectableActionsSchema = z.object({
  /** Content rendered inside the card action */
  children: z.any().optional(),
  /** Additional classes added to the action */
  className: z.string().optional()
})

export type CardSelectableActionsProps = z.infer<typeof CardSelectableActionsSchema>
