// Auto-generated Zod schema for MastheadToggleProps
import { z } from 'zod'

export const MastheadTogglePropsSchema = z.object({
  /** Content rendered inside of the masthead toggle. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead toggle. */
  className: z.string().optional()
})

export type MastheadTogglePropsProps = z.infer<typeof MastheadTogglePropsSchema>
