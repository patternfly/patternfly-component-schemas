// Auto-generated Zod schema for CompassMessageBarProps
import { z } from 'zod'

export const CompassMessageBarPropsSchema = z.object({
  /** Content of the message bar. Typically a */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the message bar */
  className: z.string().optional()
})

export type CompassMessageBarPropsProps = z.infer<typeof CompassMessageBarPropsSchema>
