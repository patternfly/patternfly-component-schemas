// Auto-generated Zod schema for DroppableItem-deprecated
import { z } from 'zod'

export const DroppableItemSchema = z.object({
  draggableNodes: z.array(z.unknown()),
  draggableNodesRects: z.array(z.unknown()),
  isDraggingHost: z.boolean(),
  node: z.unknown(),
  rect: z.unknown()
})

export type DroppableItemProps = z.infer<typeof DroppableItemSchema>
