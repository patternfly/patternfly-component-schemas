// Auto-generated Zod schema for MastheadMainProps
import { z } from 'zod'

export const MastheadMainPropsSchema = z.object({
  /** Content rendered inside of the masthead main block. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead main. */
  className: z.string().optional()
})

export type MastheadMainPropsProps = z.infer<typeof MastheadMainPropsSchema>
