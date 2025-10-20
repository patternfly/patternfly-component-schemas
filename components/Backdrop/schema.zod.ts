// Auto-generated Zod schema for Backdrop
// Generated on: 2025-10-10T18:12:17.792Z
import { z } from 'zod'

export const BackdropSchema = z.object({
  /** Content rendered inside the backdrop */
  children: z.any().optional().default('null'),
  /** Additional classes added to the backdrop */
  className: z.string().optional().default('')
})

export type BackdropProps = z.infer<typeof BackdropSchema>
