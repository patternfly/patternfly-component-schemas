// Auto-generated Zod schema for AlertGroupContext
// Generated on: 2025-10-10T18:12:17.793Z
import { z } from 'zod'

export const AlertGroupContextSchema = z.object({
  hasAnimations: z.boolean().optional(),
  updateTransitionEnd: z.function().optional()
})

export type AlertGroupContextProps = z.infer<typeof AlertGroupContextSchema>
