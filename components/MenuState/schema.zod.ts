// Auto-generated Zod schema for MenuState
// Generated on: 2025-10-16T19:02:51.740Z
import { z } from 'zod'

export const MenuStateSchema = z.object({
  currentDrilldownMenuId: z.string(),
  disableHover: z.boolean(),
  flyoutRef: z.any(),
  ouiaStateId: z.string(),
  transitionMoveTarget: z.unknown()
})

export type MenuStateProps = z.infer<typeof MenuStateSchema>
