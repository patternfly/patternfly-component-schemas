// Auto-generated Zod schema for ActionListGroup
import { z } from 'zod'

export const ActionListGroupSchema = z.object({
  /** Children of the action list group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list group */
  className: z.string().optional(),
  /** Flag indicating the action list group contains multiple icons and item padding should be removed */
  isIconGroup: z.boolean().optional()
})

export type ActionListGroupProps = z.infer<typeof ActionListGroupSchema>
