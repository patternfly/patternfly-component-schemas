// Auto-generated Zod schema for NavExpandableState
// Generated on: 2025-10-16T18:45:33.854Z
import { z } from 'zod'

export const NavExpandableStateSchema = z.object({
  expandedState: z.boolean(),
  ouiaStateId: z.string()
})

export type NavExpandableStateProps = z.infer<typeof NavExpandableStateSchema>
