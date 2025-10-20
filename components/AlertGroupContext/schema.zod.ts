// Auto-generated Zod schema for AlertGroupContext
import { z } from 'zod'

export const AlertGroupContextSchema = z.object({
  hasAnimations: z.boolean().optional(),
  updateTransitionEnd: z.custom<(onTransitionEnd: () => void) => void>().optional()
})

export type AlertGroupContextProps = z.infer<typeof AlertGroupContextSchema>
