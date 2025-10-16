// Auto-generated Zod schema for MenuState
// Generated on: 2025-10-16T18:45:33.861Z
import { z } from 'zod'

export const MenuStateSchema = z.object({
  currentDrilldownMenuId: z.string(),
  disableHover: z.boolean(),
  flyoutRef: z.any(),
  ouiaStateId: z.string(),
  transitionMoveTarget: z.unknown()
})

export type MenuStateProps = z.infer<typeof MenuStateSchema>
