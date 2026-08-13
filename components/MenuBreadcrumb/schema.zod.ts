// Auto-generated Zod schema for MenuBreadcrumb
import { z } from 'zod'

export const MenuBreadcrumbSchema = z.object({
  /** Items within breadcrumb menu container */
  children: z.custom<React.ReactNode>().optional()
})

export type MenuBreadcrumbProps = z.infer<typeof MenuBreadcrumbSchema>
