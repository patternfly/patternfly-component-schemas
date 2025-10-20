// Auto-generated Zod schema for Draggable-deprecated
import { z } from 'zod'

export const DraggableSchema = z.object({
  /** Content rendered inside DragDrop */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper: z.boolean().optional().default(false),
  style: z.unknown().optional().default('{}')
})

export type DraggableProps = z.infer<typeof DraggableSchema>
