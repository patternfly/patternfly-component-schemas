// Auto-generated Zod schema for DraggableProps-deprecated
// Generated on: 2025-10-16T19:02:51.761Z
import { z } from 'zod'

export const DraggablePropsSchema = z.object({
  /** Content rendered inside DragDrop */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to outer div */
  className: z.string().optional(),
  /** Don't wrap the component in a div. Requires passing a single child. */
  hasNoWrapper: z.boolean().optional()
})

export type DraggablePropsProps = z.infer<typeof DraggablePropsSchema>
