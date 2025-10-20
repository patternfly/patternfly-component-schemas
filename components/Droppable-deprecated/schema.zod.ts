// Auto-generated Zod schema for Droppable-deprecated
import { z } from 'zod'

export const DroppableSchema = z.object({
  /** Content rendered inside DragDrop */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Id to be passed back on drop events */
  droppableId: z.string().optional().default('defaultId'),
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper: z.boolean().optional().default(false),
  /** Name of zone that items can be dragged between. Should specify if there is more than one Droppable on the page. */
  zone: z.string().optional().default('defaultZone')
})

export type DroppableProps = z.infer<typeof DroppableSchema>
