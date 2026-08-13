// Auto-generated Zod schema for DashboardWrapperProps
import { z } from 'zod'

export const DashboardWrapperPropsSchema = z.object({
  /** Flag to render sample breadcrumb if custom breadcrumb not passed */
  hasDefaultBreadcrumb: z.boolean().optional(),
  /** Flag to render sample page title if custom title not passed */
  hasPageTemplateTitle: z.boolean().optional(),
  /** Programmatically manage if the sidebar nav is shown */
  sidebarNavOpen: z.boolean().optional()
})

export type DashboardWrapperPropsProps = z.infer<typeof DashboardWrapperPropsSchema>
