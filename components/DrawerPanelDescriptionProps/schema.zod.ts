// Auto-generated Zod schema for DrawerPanelDescriptionProps
import { z } from 'zod'

export const DrawerPanelDescriptionPropsSchema = z.object({
  /** Content to be rendered in the drawer description */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the drawer description. */
  className: z.string().optional()
})

export type DrawerPanelDescriptionPropsProps = z.infer<typeof DrawerPanelDescriptionPropsSchema>
