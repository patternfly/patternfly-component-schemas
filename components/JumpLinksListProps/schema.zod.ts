// Auto-generated Zod schema for JumpLinksListProps
import { z } from 'zod'

export const JumpLinksListPropsSchema = z.object({
  /** Text to be rendered inside span */
  children: z.custom<React.ReactNode>().optional(),
  /** Classname to add to ul. */
  className: z.string().optional()
})

export type JumpLinksListPropsProps = z.infer<typeof JumpLinksListPropsSchema>
