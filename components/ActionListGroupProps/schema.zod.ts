// Auto-generated Zod schema for ActionListGroupProps
import { z } from 'zod'

export const ActionListGroupPropsSchema = z.object({
  /** Children of the action list group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the action list group */
  className: z.string().optional(),
  /** Flag indicating the action list group contains multiple icons and item padding should be removed */
  isIconGroup: z.boolean().optional()
})

export type ActionListGroupPropsProps = z.infer<typeof ActionListGroupPropsSchema>
