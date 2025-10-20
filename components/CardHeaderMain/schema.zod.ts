// Auto-generated Zod schema for CardHeaderMain
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardHeaderMainSchema = z.object({
  /** Content rendered inside the Card Head Main */
  children: z.any().optional(),
  /** Additional classes added to the Card Head Main */
  className: z.string().optional()
})

export type CardHeaderMainProps = z.infer<typeof CardHeaderMainSchema>
