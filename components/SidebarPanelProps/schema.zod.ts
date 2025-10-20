// Auto-generated Zod schema for SidebarPanelProps
import { z } from 'zod'

export const SidebarPanelPropsSchema = z.object({
  /** Variant of the sidebar panel background. */
  backgroundVariant: z.enum(['default', 'secondary']).optional(),
  children: z.custom<React.ReactNode>(),
  /** Removes the background color. */
  hasNoBackground: z.boolean().optional(),
  /** Adds padding to the panel. */
  hasPadding: z.boolean().optional(),
  /** Indicates whether the panel is positioned statically or sticky to the top. Default is sticky on small screens when the orientation is stack, and static on medium and above screens when the orientation is split. */
  variant: z.enum(['default', 'sticky', 'static']).optional(),
  /** Sets the panel width at various breakpoints. Default is 250px when the orientation is split. */
  width: z.record(z.unknown()).optional()
})

export type SidebarPanelPropsProps = z.infer<typeof SidebarPanelPropsSchema>
