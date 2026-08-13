// Auto-generated Zod schema for CompassNavMainProps
import { z } from 'zod'

export const CompassNavMainPropsSchema = z.object({
  /** Content of the nav main section (typically tabs). */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the nav main section. */
  className: z.string().optional()
})

export type CompassNavMainPropsProps = z.infer<typeof CompassNavMainPropsSchema>
