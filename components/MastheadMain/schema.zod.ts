// Auto-generated Zod schema for MastheadMain
import { z } from 'zod'

export const MastheadMainSchema = z.object({
  /** Content rendered inside of the masthead main block. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead main. */
  className: z.string().optional()
})

export type MastheadMainProps = z.infer<typeof MastheadMainSchema>
