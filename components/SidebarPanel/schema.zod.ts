// Auto-generated Zod schema for SidebarPanel
// Generated on: 2025-10-16T18:45:33.844Z
import { z } from 'zod'

export const SidebarPanelSchema = z.object({
  /** Variant of the sidebar panel background. */
  backgroundVariant: z.enum(['default', 'secondary']).optional().default('default'),
  children: z.custom<React.ReactNode>(),
  /** Removes the background color. */
  hasNoBackground: z.boolean().optional(),
  /** Adds padding to the panel. */
  hasPadding: z.boolean().optional(),
  /** Indicates whether the panel is positioned statically or sticky to the top. Default is sticky on small screens when the orientation is stack, and static on medium and above screens when the orientation is split. */
  variant: z.enum(['default', 'sticky', 'static']).optional().default('default'),
  /** Sets the panel width at various breakpoints. Default is 250px when the orientation is split. */
  width: z.enum(['width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
  sm?: 'default', 'width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
  md?: 'default', 'width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
  lg?: 'default', 'width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
  xl?: 'default', 'width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
  '2xl'?: 'default', 'width_25', 'width_33', 'width_50', 'width_66', 'width_75', 'width_100';
']).optional()
})

export type SidebarPanelProps = z.infer<typeof SidebarPanelSchema>
