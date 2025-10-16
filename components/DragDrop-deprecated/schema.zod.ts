// Auto-generated Zod schema for DragDrop-deprecated
// Generated on: 2025-10-16T18:45:33.893Z
import { z } from 'zod'

export const DragDropSchema = z.object({
  /** Potentially Droppable and Draggable children */
  children: z.custom<React.ReactNode>().optional(),
  /** Callback for drag event. Return true to allow drag, false to disallow. */
  onDrag: z.function().optional().default('() => true'),
  /** Callback on mouse move while dragging. */
  onDragMove: z.function().optional().default('() => {}'),
  /** Callback for drop event. Return true to allow drop, false to disallow. */
  onDrop: z.function().optional().default('() => false')
})

export type DragDropProps = z.infer<typeof DragDropSchema>
