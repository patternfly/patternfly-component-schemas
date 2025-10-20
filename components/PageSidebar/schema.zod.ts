// Auto-generated Zod schema for PageSidebar
import { z } from 'zod'

export const PageSidebarSchema = z.object({
  /** Content rendered inside the page sidebar (e.g. <PageSidebarBody /> */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the page sidebar */
  className: z.string().optional().default(''),
  /** Sidebar id */
  id: z.string().optional().default('page-sidebar'),
  /** If true, manages the sidebar open/close state and there is no need to pass the isSidebarOpen boolean into
the sidebar component or add a callback onSidebarToggle function into the Masthead component */
  isManagedSidebar: z.boolean().optional(),
  /** Programmatically manage if the sidebar is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
  isSidebarOpen: z.boolean().optional().default(true)
})

export type PageSidebarProps = z.infer<typeof PageSidebarSchema>
