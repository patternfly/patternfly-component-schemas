// Auto-generated Zod schema for DrawerPanelDescription
import { z } from 'zod'

export const DrawerPanelDescriptionSchema = z.object({
  /** Content to be rendered in the drawer description */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the drawer description. */
  className: z.string().optional()
})

export type DrawerPanelDescriptionProps = z.infer<typeof DrawerPanelDescriptionSchema>
