// Auto-generated Zod schema for CardHeaderMain
import { z } from 'zod'

export const CardHeaderMainSchema = z.object({
  /** Content rendered inside the Card Head Main */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Head Main */
  className: z.string().optional()
})

export type CardHeaderMainProps = z.infer<typeof CardHeaderMainSchema>
