// Auto-generated Zod schema for NonStatusBanner
// Generated on: 2025-10-16T19:02:51.755Z
import { z } from 'zod'

export const NonStatusBannerSchema = z.object({
  color: z.unknown().optional(),
  status: z.unknown().optional()
})

export type NonStatusBannerProps = z.infer<typeof NonStatusBannerSchema>
