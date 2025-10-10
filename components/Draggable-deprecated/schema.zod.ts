// Auto-generated Zod schema for Draggable-deprecated
// Generated on: 2025-10-10T18:12:17.800Z
import { z } from 'zod'

export const DraggableSchema = z.object({
  /** Content rendered inside DragDrop */
  children: z.any().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper: z.boolean().optional().default(false),
  style: z.any().optional().default('{}')
})

export type DraggableProps = z.infer<typeof DraggableSchema>
