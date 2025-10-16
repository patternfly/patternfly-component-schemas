// Auto-generated Zod schema for DraggableItemPosition-deprecated
// Generated on: 2025-10-16T19:02:51.762Z
import { z } from 'zod'

export const DraggableItemPositionSchema = z.object({
  /** Parent droppableId */
  droppableId: z.string(),
  /** Index of item in parent Droppable */
  index: z.number()
})

export type DraggableItemPositionProps = z.infer<typeof DraggableItemPositionSchema>
