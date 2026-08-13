// Auto-generated Zod schema for ActionList
import { z } from 'zod'

export const ActionListSchema = z.object({
  /** Children of the action list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list */
  className: z.string().optional(),
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  isIconList: z.boolean().optional(),
  /** Whether the layout of children is vertical or horizontal. */
  isVertical: z.boolean().optional().default(false)
})

export type ActionListProps = z.infer<typeof ActionListSchema>
