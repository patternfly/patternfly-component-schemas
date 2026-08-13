// Auto-generated Zod schema for DrawerActions
import { z } from 'zod'

export const DrawerActionsSchema = z.object({
  /** Actions to be rendered in the panel head. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer actions button. */
  className: z.string().optional().default('')
})

export type DrawerActionsProps = z.infer<typeof DrawerActionsSchema>
