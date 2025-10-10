// Auto-generated Zod schema for MastheadToggle
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MastheadToggleSchema = z.object({
  /** Content rendered inside of the masthead toggle. */
  children: z.any().optional(),
  /** Additional classes added to the masthead toggle. */
  className: z.string().optional()
})

export type MastheadToggleProps = z.infer<typeof MastheadToggleSchema>
