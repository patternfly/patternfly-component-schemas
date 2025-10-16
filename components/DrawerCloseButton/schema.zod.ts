// Auto-generated Zod schema for DrawerCloseButton
// Generated on: 2025-10-16T19:25:27.773Z
import { z } from 'zod'

export const DrawerCloseButtonSchema = z.object({
  /** Accessible label for the drawer close button */
  'aria-label': z.string().optional().default('Close drawer panel'),
  /** Additional classes added to the drawer close button outer <div>. */
  className: z.string().optional().default(''),
  /** A callback for when the close button is clicked */
  onClose: z.custom<() => void>().optional().default('() => undefined as any')
})

export type DrawerCloseButtonProps = z.infer<typeof DrawerCloseButtonSchema>
