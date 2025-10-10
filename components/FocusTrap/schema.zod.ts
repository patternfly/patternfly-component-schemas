// Auto-generated Zod schema for FocusTrap
// Generated on: 2025-10-10T18:12:17.761Z
import { z } from 'zod'

export const FocusTrapSchema = z.object({
  active: z.boolean().optional().default(true),
  focusTrapOptions: z.any().optional().default('{}'),
  paused: z.boolean().optional().default(false),
  /** Prevent from scrolling to the previously focused element on deactivation */
  preventScrollOnDeactivate: z.boolean().optional().default(false)
})

export type FocusTrapProps = z.infer<typeof FocusTrapSchema>
