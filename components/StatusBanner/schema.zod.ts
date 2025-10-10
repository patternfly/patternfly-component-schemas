// Auto-generated Zod schema for StatusBanner
// Generated on: 2025-10-10T18:12:17.792Z
import { z } from 'zod'

export const StatusBannerSchema = z.object({
  color: z.any().optional(),
  status: z.any().optional()
})

export type StatusBannerProps = z.infer<typeof StatusBannerSchema>
