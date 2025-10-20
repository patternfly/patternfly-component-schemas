// Auto-generated Zod schema for StatusBanner
import { z } from 'zod'

export const StatusBannerSchema = z.object({
  color: z.unknown().optional(),
  status: z.unknown().optional()
})

export type StatusBannerProps = z.infer<typeof StatusBannerSchema>
