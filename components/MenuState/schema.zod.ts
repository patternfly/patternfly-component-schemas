// Auto-generated Zod schema for MenuState
import { z } from 'zod'

export const MenuStateSchema = z.object({
  currentDrilldownMenuId: z.string(),
  disableHover: z.boolean(),
  flyoutRef: z.any(),
  ouiaStateId: z.string(),
  transitionMoveTarget: z.unknown()
})

export type MenuStateProps = z.infer<typeof MenuStateSchema>
