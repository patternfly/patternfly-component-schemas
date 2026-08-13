// Auto-generated Zod schema for CompassDockMainProps
import { z } from 'zod'

export const CompassDockMainPropsSchema = z.object({
  /** Content of the compass dock main container. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the compass dock main container. */
  className: z.string().optional()
})

export type CompassDockMainPropsProps = z.infer<typeof CompassDockMainPropsSchema>
