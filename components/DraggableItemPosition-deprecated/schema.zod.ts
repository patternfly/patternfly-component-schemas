// Auto-generated Zod schema for DraggableItemPosition-deprecated
// Generated on: 2025-10-16T18:56:01.664Z
import { z } from 'zod'

export const DraggableItemPositionSchema = z.object({
  /** Parent droppableId */
  droppableId: z.string(),
  /** Index of item in parent Droppable */
  index: z.number()
})

export type DraggableItemPositionProps = z.infer<typeof DraggableItemPositionSchema>
