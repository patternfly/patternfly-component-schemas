// Auto-generated Zod schema for StatusBanner
// Generated on: 2025-10-16T19:02:51.755Z
import { z } from 'zod'

export const StatusBannerSchema = z.object({
  color: z.unknown().optional(),
  status: z.unknown().optional()
})

export type StatusBannerProps = z.infer<typeof StatusBannerSchema>
