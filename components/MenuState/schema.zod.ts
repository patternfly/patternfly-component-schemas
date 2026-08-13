// Auto-generated Zod schema for MenuState
import { z } from 'zod'

export const MenuStateSchema = z.object({
  currentDrilldownMenuId: z.string(),
  flyoutRef: z.any(),
  transitionMoveTarget: z.unknown()
})

export type MenuStateProps = z.infer<typeof MenuStateSchema>
