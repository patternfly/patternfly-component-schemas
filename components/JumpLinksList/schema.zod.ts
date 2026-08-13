// Auto-generated Zod schema for JumpLinksList
import { z } from 'zod'

export const JumpLinksListSchema = z.object({
  /** Text to be rendered inside span */
  children: z.custom<React.ReactNode>().optional(),
  /** Classname to add to ul. */
  className: z.string().optional()
})

export type JumpLinksListProps = z.infer<typeof JumpLinksListSchema>
