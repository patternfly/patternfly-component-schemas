// Auto-generated Zod schema for NavExpandableState
import { z } from 'zod'

export const NavExpandableStateSchema = z.object({
  expandedState: z.boolean(),
  ouiaStateId: z.string()
})

export type NavExpandableStateProps = z.infer<typeof NavExpandableStateSchema>
