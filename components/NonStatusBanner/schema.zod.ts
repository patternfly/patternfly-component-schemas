// Auto-generated Zod schema for NonStatusBanner
// Generated on: 2025-10-10T18:12:17.792Z
import { z } from 'zod'

export const NonStatusBannerSchema = z.object({
  color: z.any().optional(),
  status: z.any().optional()
})

export type NonStatusBannerProps = z.infer<typeof NonStatusBannerSchema>
