// Auto-generated Zod schema for DrawerCloseButtonProps
import { z } from 'zod'

export const DrawerCloseButtonPropsSchema = z.object({
  /** Additional classes added to the drawer close button outer <div>. */
  className: z.string().optional(),
  /** A callback for when the close button is clicked */
  onClose: z.custom<() => void>().optional(),
  /** Accessible label for the drawer close button */
  'Unknown': z.string().optional()
})

export type DrawerCloseButtonPropsProps = z.infer<typeof DrawerCloseButtonPropsSchema>
