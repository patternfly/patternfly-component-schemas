// Auto-generated Zod schema for CompassDockMain
import { z } from 'zod'

export const CompassDockMainSchema = z.object({
  /** Content of the compass dock main container. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the compass dock main container. */
  className: z.string().optional()
})

export type CompassDockMainProps = z.infer<typeof CompassDockMainSchema>
