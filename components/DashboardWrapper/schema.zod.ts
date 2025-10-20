// Auto-generated Zod schema for DashboardWrapper
import { z } from 'zod'

export const DashboardWrapperSchema = z.object({
  /** Flag to render sample breadcrumb if custom breadcrumb not passed */
  hasDefaultBreadcrumb: z.boolean().optional(),
  /** Flag to render sample page title if custom title not passed */
  hasPageTemplateTitle: z.boolean().optional(),
  /** Programmatically manage if the sidebar nav is shown */
  sidebarNavOpen: z.boolean().optional()
})

export type DashboardWrapperProps = z.infer<typeof DashboardWrapperSchema>
