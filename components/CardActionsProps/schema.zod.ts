// Auto-generated Zod schema for CardActionsProps
// Generated on: 2025-10-16T19:25:27.778Z
import { z } from 'zod'

export const CardActionsPropsSchema = z.object({
  /** Content rendered inside the card action */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action */
  className: z.string().optional(),
  /** Content rendered inside the card action */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action */
  className: z.string().optional(),
  /** Flag indicating that the actions have no offset */
  hasNoOffset: z.boolean().optional()
})

export type CardActionsPropsProps = z.infer<typeof CardActionsPropsSchema>
