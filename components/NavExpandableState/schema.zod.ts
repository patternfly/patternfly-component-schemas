// Auto-generated Zod schema for NavExpandableState
// Generated on: 2025-10-10T18:12:17.775Z
import { z } from 'zod'

export const NavExpandableStateSchema = z.object({
  expandedState: z.boolean(),
  ouiaStateId: z.string()
})

export type NavExpandableStateProps = z.infer<typeof NavExpandableStateSchema>
