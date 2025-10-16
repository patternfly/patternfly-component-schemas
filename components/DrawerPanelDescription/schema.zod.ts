// Auto-generated Zod schema for DrawerPanelDescription
// Generated on: 2025-10-10T18:12:17.786Z
import { z } from 'zod'

export const DrawerPanelDescriptionSchema = z.object({
  /** Content to be rendered in the drawer description */
  children: z.any(),
  /** Additional classes added to the drawer description. */
  className: z.string().optional()
})

export type DrawerPanelDescriptionProps = z.infer<typeof DrawerPanelDescriptionSchema>
