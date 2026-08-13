// Auto-generated Zod schema for CardHeaderMainProps
import { z } from 'zod'

export const CardHeaderMainPropsSchema = z.object({
  /** Content rendered inside the Card Head Main */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Card Head Main */
  className: z.string().optional()
})

export type CardHeaderMainPropsProps = z.infer<typeof CardHeaderMainPropsSchema>
