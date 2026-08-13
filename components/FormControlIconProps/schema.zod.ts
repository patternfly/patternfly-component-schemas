// Auto-generated Zod schema for FormControlIconProps
import { z } from 'zod'

export const FormControlIconPropsSchema = z.object({
  /** Additional class names added to the text input icon wrapper. */
  className: z.string().optional(),
  /** A custom icon to render instead of a status icon. */
  customIcon: z.custom<React.ReactNode>().optional(),
  /** The status icon to render. */
  status: z.enum(['success', 'error', 'warning']).optional()
})

export type FormControlIconPropsProps = z.infer<typeof FormControlIconPropsSchema>
