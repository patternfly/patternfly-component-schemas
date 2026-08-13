// Auto-generated Zod schema for MastheadToggle
import { z } from 'zod'

export const MastheadToggleSchema = z.object({
  /** Content rendered inside of the masthead toggle. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead toggle. */
  className: z.string().optional()
})

export type MastheadToggleProps = z.infer<typeof MastheadToggleSchema>
