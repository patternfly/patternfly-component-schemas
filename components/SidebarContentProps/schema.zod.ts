// Auto-generated Zod schema for SidebarContentProps
import { z } from 'zod'

export const SidebarContentPropsSchema = z.object({
  /** Variant of the sidebar content background. */
  backgroundVariant: z.enum(['default', 'secondary']).optional(),
  children: z.custom<React.ReactNode>(),
  /** Removes the background color. */
  hasNoBackground: z.boolean().optional(),
  /** Adds padding to the content. */
  hasPadding: z.boolean().optional()
})

export type SidebarContentPropsProps = z.infer<typeof SidebarContentPropsSchema>
