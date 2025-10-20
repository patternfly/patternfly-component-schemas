// Auto-generated Zod schema for JumpLinksItem
import { z } from 'zod'

export const JumpLinksItemSchema = z.object({
  /** Text to be rendered inside span */
  children: z.custom<React.ReactNode>().optional(),
  /** Class to add to li */
  className: z.string().optional(),
  /** Href for this link */
  href: z.string(),
  /** Whether this item is active. Parent JumpLinks component sets this when passed a `scrollableSelector`. */
  isActive: z.boolean().optional(),
  /** Selector or HTMLElement to spy on */
  node: z.any().optional(),
  /** Click handler for anchor tag. Parent JumpLinks components tap into this. */
  onClick: z.custom<Event>().optional()
})

export type JumpLinksItemProps = z.infer<typeof JumpLinksItemSchema>
