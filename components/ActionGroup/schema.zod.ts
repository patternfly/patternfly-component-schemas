// Auto-generated Zod schema for ActionGroup
import { z } from 'zod'

export const ActionGroupSchema = z.object({
  /** Anything that can be rendered as ActionGroup content. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the ActionGroup. */
  className: z.string().optional().default('')
})

export type ActionGroupProps = z.infer<typeof ActionGroupSchema>
