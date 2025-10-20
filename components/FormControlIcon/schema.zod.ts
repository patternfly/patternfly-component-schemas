// Auto-generated Zod schema for FormControlIcon
import { z } from 'zod'

export const FormControlIconSchema = z.object({
  /** Additional class names added to the text input icon wrapper. */
  className: z.string().optional(),
  /** A custom icon to render instead of a status icon. */
  customIcon: z.custom<React.ReactNode>().optional(),
  /** The status icon to render. */
  status: z.enum(['success', 'error', 'warning']).optional()
})

export type FormControlIconProps = z.infer<typeof FormControlIconSchema>
