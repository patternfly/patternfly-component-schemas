// Auto-generated Zod schema for Backdrop
import { z } from 'zod'

export const BackdropSchema = z.object({
  /** Content rendered inside the backdrop */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the backdrop */
  className: z.string().optional().default('')
})

export type BackdropProps = z.infer<typeof BackdropSchema>
