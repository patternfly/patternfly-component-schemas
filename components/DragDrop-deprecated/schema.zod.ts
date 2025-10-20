// Auto-generated Zod schema for DragDrop-deprecated
import { z } from 'zod'

export const DragDropSchema = z.object({
  /** Potentially Droppable and Draggable children */
  children: z.custom<React.ReactNode>().optional(),
  /** Callback for drag event. Return true to allow drag, false to disallow. */
  onDrag: z.custom<(source: DraggableItemPosition) => boolean>().optional().default('() => true'),
  /** Callback on mouse move while dragging. */
  onDragMove: z.custom<(source: DraggableItemPosition, dest?: DraggableItemPosition) => void>().optional().default('() => {}'),
  /** Callback for drop event. Return true to allow drop, false to disallow. */
  onDrop: z.custom<(source: DraggableItemPosition, dest?: DraggableItemPosition) => boolean>().optional().default('() => false')
})

export type DragDropProps = z.infer<typeof DragDropSchema>
