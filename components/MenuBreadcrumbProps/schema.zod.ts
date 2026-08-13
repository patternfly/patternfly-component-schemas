// Auto-generated Zod schema for MenuBreadcrumbProps
import { z } from 'zod'

export const MenuBreadcrumbPropsSchema = z.object({
  /** Items within breadcrumb menu container */
  children: z.custom<React.ReactNode>().optional()
})

export type MenuBreadcrumbPropsProps = z.infer<typeof MenuBreadcrumbPropsSchema>
