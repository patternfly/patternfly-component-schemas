// Auto-generated Zod schema for DroppableItem-deprecated
// Generated on: 2025-10-10T18:12:17.800Z
import { z } from 'zod'

export const DroppableItemSchema = z.object({
  draggableNodes: z.array(z.any()),
  draggableNodesRects: z.array(z.any()),
  isDraggingHost: z.boolean(),
  node: z.any(),
  rect: z.any()
})

export type DroppableItemProps = z.infer<typeof DroppableItemSchema>
