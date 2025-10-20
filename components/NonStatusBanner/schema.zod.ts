// Auto-generated Zod schema for NonStatusBanner
import { z } from 'zod'

export const NonStatusBannerSchema = z.object({
  color: z.unknown().optional(),
  status: z.unknown().optional()
})

export type NonStatusBannerProps = z.infer<typeof NonStatusBannerSchema>
