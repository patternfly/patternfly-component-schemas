// Auto-generated Zod schema for MenuState
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MenuStateSchema = z.object({
  currentDrilldownMenuId: z.string(),
  disableHover: z.boolean(),
  flyoutRef: z.any(),
  ouiaStateId: z.string(),
  transitionMoveTarget: z.any()
})

export type MenuStateProps = z.infer<typeof MenuStateSchema>
