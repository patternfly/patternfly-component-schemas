// Auto-generated Zod schema for DragDropProps-deprecated
// Generated on: 2025-10-10T18:12:17.800Z
import { z } from 'zod'

export const DragDropPropsSchema = z.object({
  /** Potentially Droppable and Draggable children */
  children: z.any().optional(),
  /** Callback for drag event. Return true to allow drag, false to disallow. */
  onDrag: z.function().optional(),
  /** Callback on mouse move while dragging. */
  onDragMove: z.function().optional(),
  /** Callback for drop event. Return true to allow drop, false to disallow. */
  onDrop: z.function().optional()
})

export type DragDropPropsProps = z.infer<typeof DragDropPropsSchema>
