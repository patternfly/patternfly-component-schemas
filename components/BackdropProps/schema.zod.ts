// Auto-generated Zod schema for BackdropProps
import { z } from 'zod'

export const BackdropPropsSchema = z.object({
  /** Content rendered inside the backdrop */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the backdrop */
  className: z.string().optional()
})

export type BackdropPropsProps = z.infer<typeof BackdropPropsSchema>
