// Auto-generated Zod schema for PageContextProps
import { z } from 'zod'

export const PageContextPropsSchema = z.object({
  getBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  getVerticalBreakpoint: z.enum(['sm', 'md', 'lg', 'xl', '2xl']),
  height: z.number(),
  isManagedSidebar: z.boolean(),
  isSidebarOpen: z.boolean(),
  onSidebarToggle: z.custom<() => void>(),
  width: z.number()
})

export type PageContextPropsProps = z.infer<typeof PageContextPropsSchema>
