// Auto-generated Zod schema for ActionGroup
// Generated on: 2025-10-10T18:12:17.785Z
import { z } from 'zod'

export const ActionGroupSchema = z.object({
  /** Anything that can be rendered as ActionGroup content. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the ActionGroup. */
  className: z.string().optional().default('')
})

export type ActionGroupProps = z.infer<typeof ActionGroupSchema>
