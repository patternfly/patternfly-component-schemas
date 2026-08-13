// Auto-generated Zod schema for AlertIconProps
import { z } from 'zod'

export const AlertIconPropsSchema = z.object({
  /** Additional class names added to the alert icon. */
  className: z.string().optional(),
  /** A custom icon. If not set the icon is set according to the variant. */
  customIcon: z.custom<React.ReactNode>().optional(),
  /** Variant of the alert icon. */
  variant: z.enum(['success', 'danger', 'warning', 'info', 'custom'])
})

export type AlertIconPropsProps = z.infer<typeof AlertIconPropsSchema>
