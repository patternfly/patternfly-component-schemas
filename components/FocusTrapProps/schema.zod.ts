// Auto-generated Zod schema for FocusTrapProps
import { z } from 'zod'

export const FocusTrapPropsSchema = z.object({
  active: z.boolean().optional(),
  focusTrapOptions: z.unknown().optional(),
  /** Unique id that can optionally be applied to focus trap */
  id: z.string().optional(),
  paused: z.boolean().optional(),
  /** Prevent from scrolling to the previously focused element on deactivation */
  preventScrollOnDeactivate: z.boolean().optional()
})

export type FocusTrapPropsProps = z.infer<typeof FocusTrapPropsSchema>
