// Auto-generated Zod schema for ActionListItemProps
import { z } from 'zod'

export const ActionListItemPropsSchema = z.object({
  /** Children of the action list item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list item */
  className: z.string().optional()
})

export type ActionListItemPropsProps = z.infer<typeof ActionListItemPropsSchema>
