// Auto-generated Zod schema for AlertGroupContext
// Generated on: 2025-10-16T19:25:27.780Z
import { z } from 'zod'

export const AlertGroupContextSchema = z.object({
  hasAnimations: z.boolean().optional(),
  updateTransitionEnd: z.custom<(onTransitionEnd: () => void) => void>().optional()
})

export type AlertGroupContextProps = z.infer<typeof AlertGroupContextSchema>
