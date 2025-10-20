// Auto-generated Zod schema for DrawerActions
// Generated on: 2025-10-10T18:12:17.787Z
import { z } from 'zod'

export const DrawerActionsSchema = z.object({
  /** Actions to be rendered in the panel head. */
  children: z.any().optional(),
  /** Additional classes added to the drawer actions button. */
  className: z.string().optional().default('')
})

export type DrawerActionsProps = z.infer<typeof DrawerActionsSchema>
