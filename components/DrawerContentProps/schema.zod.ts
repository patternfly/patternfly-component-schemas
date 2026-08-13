// Auto-generated Zod schema for DrawerContentProps
import { z } from 'zod'

export const DrawerContentPropsSchema = z.object({
  /** Content to be rendered in the drawer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional(),
  /** Color variant of the background of the drawer panel */
  colorVariant: z.enum(['default', 'primary', 'secondary']).optional(),
  /** Content rendered in the drawer panel. */
  panelContent: z.custom<React.ReactNode>()
})

export type DrawerContentPropsProps = z.infer<typeof DrawerContentPropsSchema>
