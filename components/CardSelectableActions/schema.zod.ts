// Auto-generated Zod schema for CardSelectableActions
import { z } from 'zod'

export const CardSelectableActionsSchema = z.object({
  /** Content rendered inside the card action */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action */
  className: z.string().optional()
})

export type CardSelectableActionsProps = z.infer<typeof CardSelectableActionsSchema>
