// Auto-generated Zod schema for SidebarContent
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SidebarContentSchema = z.object({
  /** Variant of the sidebar content background. */
  backgroundVariant: z.enum(['default', 'secondary']).optional().default('default'),
  children: z.any(),
  /** Removes the background color. */
  hasNoBackground: z.boolean().optional(),
  /** Adds padding to the content. */
  hasPadding: z.boolean().optional()
})

export type SidebarContentProps = z.infer<typeof SidebarContentSchema>
