// Auto-generated Zod schema for DashboardHeaderProps
import { z } from 'zod'

export const DashboardHeaderPropsSchema = z.object({
  /** Render custom notification badge */
  notificationBadge: z.custom<React.ReactNode>().optional()
})

export type DashboardHeaderPropsProps = z.infer<typeof DashboardHeaderPropsSchema>
