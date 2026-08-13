// Auto-generated Zod schema for DrawerPanelBodyProps
import { z } from 'zod'

export const DrawerPanelBodyPropsSchema = z.object({
  /** Content to be rendered in the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional(),
  /** Indicates if there should be no padding around the drawer panel body */
  hasNoPadding: z.boolean().optional()
})

export type DrawerPanelBodyPropsProps = z.infer<typeof DrawerPanelBodyPropsSchema>
