// Auto-generated Zod schema for ActionListGroup
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const ActionListGroupSchema = z.object({
  /** Children of the action list group */
  children: z.any().optional(),
  /** Additional classes added to the action list group */
  className: z.string().optional(),
  /** Flag indicating the action list group contains multiple icons and item padding should be removed */
  isIconGroup: z.boolean().optional()
})

export type ActionListGroupProps = z.infer<typeof ActionListGroupSchema>
