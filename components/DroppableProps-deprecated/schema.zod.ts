// Auto-generated Zod schema for DroppableProps-deprecated
import { z } from 'zod'

export const DroppablePropsSchema = z.object({
  /** Content rendered inside DragDrop */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Id to be passed back on drop events */
  droppableId: z.string().optional(),
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper: z.boolean().optional(),
  /** Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page. */
  zone: z.string().optional()
})

export type DroppablePropsProps = z.infer<typeof DroppablePropsSchema>
