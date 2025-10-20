// Auto-generated Zod schema for MastheadMain
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MastheadMainSchema = z.object({
  /** Content rendered inside of the masthead main block. */
  children: z.any().optional(),
  /** Additional classes added to the masthead main. */
  className: z.string().optional()
})

export type MastheadMainProps = z.infer<typeof MastheadMainSchema>
