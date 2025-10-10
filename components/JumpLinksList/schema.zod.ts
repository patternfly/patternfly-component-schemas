// Auto-generated Zod schema for JumpLinksList
// Generated on: 2025-10-10T18:12:17.783Z
import { z } from 'zod'

export const JumpLinksListSchema = z.object({
  /** Text to be rendered inside span */
  children: z.any().optional(),
  /** Classname to add to ul. */
  className: z.string().optional()
})

export type JumpLinksListProps = z.infer<typeof JumpLinksListSchema>
