// Auto-generated Zod schema for CompassNavMain
import { z } from 'zod'

export const CompassNavMainSchema = z.object({
  /** Content of the nav main section (typically tabs). */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the nav main section. */
  className: z.string().optional()
})

export type CompassNavMainProps = z.infer<typeof CompassNavMainSchema>
