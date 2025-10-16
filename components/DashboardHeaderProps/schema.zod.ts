// Auto-generated Zod schema for DashboardHeaderProps
// Generated on: 2025-10-16T19:25:27.740Z
import { z } from 'zod'

export const DashboardHeaderPropsSchema = z.object({
  /** Render custom notification badge */
  notificationBadge: z.custom<React.ReactNode>().optional()
})

export type DashboardHeaderPropsProps = z.infer<typeof DashboardHeaderPropsSchema>
