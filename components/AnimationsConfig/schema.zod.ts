// Auto-generated Zod schema for AnimationsConfig
import { z } from 'zod'

export const AnimationsConfigSchema = z.object({
  /** Whether animations are enabled globally */
  hasAnimations: z.boolean().optional()
})

export type AnimationsConfigProps = z.infer<typeof AnimationsConfigSchema>
