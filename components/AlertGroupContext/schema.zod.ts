// Auto-generated Zod schema for AlertGroupContext
// Generated on: 2025-10-16T18:45:33.886Z
import { z } from 'zod'

export const AlertGroupContextSchema = z.object({
  hasAnimations: z.boolean().optional(),
  updateTransitionEnd: z.function().optional()
})

export type AlertGroupContextProps = z.infer<typeof AlertGroupContextSchema>
