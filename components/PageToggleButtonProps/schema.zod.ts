// Auto-generated Zod schema for PageToggleButtonProps
import { z } from 'zod'

export const PageToggleButtonPropsSchema = z.object({
  /** Content of the page toggle button */
  children: z.custom<React.ReactNode>().optional(),
  /** Button id */
  id: z.string().optional(),
  /** True if the sidebar is shown */
  isSidebarOpen: z.boolean().optional(),
  /** Callback function to handle the sidebar toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onSidebarToggle: z.custom<() => void>().optional()
})

export type PageToggleButtonPropsProps = z.infer<typeof PageToggleButtonPropsSchema>
