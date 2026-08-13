// Auto-generated Zod schema for DrawerActionsProps
import { z } from 'zod'

export const DrawerActionsPropsSchema = z.object({
  /** Actions to be rendered in the panel head. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the drawer actions button. */
  className: z.string().optional()
})

export type DrawerActionsPropsProps = z.infer<typeof DrawerActionsPropsSchema>
