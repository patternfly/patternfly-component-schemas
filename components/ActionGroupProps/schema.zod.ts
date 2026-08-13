// Auto-generated Zod schema for ActionGroupProps
import { z } from 'zod'

export const ActionGroupPropsSchema = z.object({
  /** Anything that can be rendered as ActionGroup content. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the ActionGroup. */
  className: z.string().optional()
})

export type ActionGroupPropsProps = z.infer<typeof ActionGroupPropsSchema>
