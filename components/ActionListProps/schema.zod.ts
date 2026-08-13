// Auto-generated Zod schema for ActionListProps
import { z } from 'zod'

export const ActionListPropsSchema = z.object({
  /** Children of the action list */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list */
  className: z.string().optional(),
  /** Flag indicating the action list contains multiple icons and item padding should be removed */
  isIconList: z.boolean().optional(),
  isVertical: z.boolean().optional()
})

export type ActionListPropsProps = z.infer<typeof ActionListPropsSchema>
