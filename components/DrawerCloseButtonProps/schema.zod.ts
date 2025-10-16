// Auto-generated Zod schema for DrawerCloseButtonProps
// Generated on: 2025-10-16T18:45:33.875Z
import { z } from 'zod'

export const DrawerCloseButtonPropsSchema = z.object({
  /** Additional classes added to the drawer close button outer <div>. */
  className: z.string().optional(),
  /** A callback for when the close button is clicked */
  onClose: z.function().optional(),
  /** Accessible label for the drawer close button */
  'Unknown': z.string().optional()
})

export type DrawerCloseButtonPropsProps = z.infer<typeof DrawerCloseButtonPropsSchema>
