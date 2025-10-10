// Auto-generated Zod schema for PageState
// Generated on: 2025-10-10T18:12:17.774Z
import { z } from 'zod'

export const PageStateSchema = z.object({
  desktopIsSidebarOpen: z.boolean(),
  height: z.number(),
  mobileIsSidebarOpen: z.boolean(),
  mobileView: z.boolean(),
  width: z.number()
})

export type PageStateProps = z.infer<typeof PageStateSchema>
