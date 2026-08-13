// Auto-generated Zod schema for DrawerContentBodyProps
import { z } from 'zod'

export const DrawerContentBodyPropsSchema = z.object({
  /** Content to be rendered in the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional(),
  /** Indicates if there should be padding around the drawer content body */
  hasPadding: z.boolean().optional()
})

export type DrawerContentBodyPropsProps = z.infer<typeof DrawerContentBodyPropsSchema>
