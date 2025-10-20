// Auto-generated Zod schema for DrawerContent
import { z } from 'zod'

export const DrawerContentSchema = z.object({
  /** Content to be rendered in the drawer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Drawer. */
  className: z.string().optional(),
  /** Color variant of the background of the drawer panel */
  colorVariant: z.enum(['default', 'primary', 'secondary']).optional().default('DrawerContentColorVariant.default'),
  /** Content rendered in the drawer panel. */
  panelContent: z.custom<React.ReactNode>()
})

export type DrawerContentProps = z.infer<typeof DrawerContentSchema>
