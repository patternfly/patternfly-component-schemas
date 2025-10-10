// Auto-generated Zod schema for AlertIcon
// Generated on: 2025-10-10T18:12:17.793Z
import { z } from 'zod'

export const AlertIconSchema = z.object({
  /** Additional class names added to the alert icon. */
  className: z.string().optional().default(''),
  /** A custom icon. If not set the icon is set according to the variant. */
  customIcon: z.any().optional(),
  /** Variant of the alert icon. */
  variant: z.enum(['success', 'danger', 'warning', 'info', 'custom'])
})

export type AlertIconProps = z.infer<typeof AlertIconSchema>
