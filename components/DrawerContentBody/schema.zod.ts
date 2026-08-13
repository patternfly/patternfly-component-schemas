// Auto-generated Zod schema for DrawerContentBody
import { z } from 'zod'

export const DrawerContentBodySchema = z.object({
  /** Content to be rendered in the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional().default(''),
  /** Indicates if there should be padding around the drawer content body */
  hasPadding: z.boolean().optional().default(false)
})

export type DrawerContentBodyProps = z.infer<typeof DrawerContentBodySchema>
