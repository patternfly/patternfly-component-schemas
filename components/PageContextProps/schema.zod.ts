// Auto-generated Zod schema for PageContextProps
// Generated on: 2025-10-16T18:45:33.852Z
import { z } from 'zod'

export const PageContextPropsSchema = z.object({
  getBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  getVerticalBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  height: z.number(),
  isManagedSidebar: z.boolean(),
  isSidebarOpen: z.boolean(),
  onSidebarToggle: z.function(),
  width: z.number()
})

export type PageContextPropsProps = z.infer<typeof PageContextPropsSchema>
