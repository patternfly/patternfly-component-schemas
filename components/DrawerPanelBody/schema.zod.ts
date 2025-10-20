// Auto-generated Zod schema for DrawerPanelBody
import { z } from 'zod'

export const DrawerPanelBodySchema = z.object({
  /** Content to be rendered in the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional().default(''),
  /** Indicates if there should be no padding around the drawer panel body */
  hasNoPadding: z.boolean().optional().default(false)
})

export type DrawerPanelBodyProps = z.infer<typeof DrawerPanelBodySchema>
