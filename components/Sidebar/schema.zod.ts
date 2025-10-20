// Auto-generated Zod schema for Sidebar
import { z } from 'zod'

export const SidebarSchema = z.object({
  children: z.custom<React.ReactNode>().optional(),
  /** Adds a border between the panel and content. */
  hasBorder: z.boolean().optional(),
  /** Adds space between the panel and content. */
  hasGutter: z.boolean().optional(),
  /** Removes the background color. */
  hasNoBackground: z.boolean().optional(),
  /** Indicates that the panel is displayed to the right of the content when the oritentation is split. */
  isPanelRight: z.boolean().optional().default(false),
  /** Indicates the direction of the layout. Default orientation is stack on small screens, and split on medium screens and above. */
  orientation: z.enum(['stack', 'split']).optional()
})

export type SidebarProps = z.infer<typeof SidebarSchema>
