// Auto-generated Zod schema for StatusBanner
// Generated on: 2025-10-16T18:56:01.656Z
import { z } from 'zod'

export const StatusBannerSchema = z.object({
  color: z.unknown().optional(),
  status: z.unknown().optional()
})

export type StatusBannerProps = z.infer<typeof StatusBannerSchema>
