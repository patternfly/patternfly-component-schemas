// Auto-generated Zod schema for MenuBreadcrumb
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MenuBreadcrumbSchema = z.object({
  /** Items within breadcrumb menu container */
  children: z.any().optional()
})

export type MenuBreadcrumbProps = z.infer<typeof MenuBreadcrumbSchema>
