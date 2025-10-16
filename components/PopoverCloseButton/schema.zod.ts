// Auto-generated Zod schema for PopoverCloseButton
// Generated on: 2025-10-16T19:02:51.732Z
import { z } from 'zod'

export const PopoverCloseButtonSchema = z.object({
  /** Aria label for the Close button */
  'aria-label': z.string(),
  /** PopoverCloseButton onClose function */
  onClose: z.function().optional().default('() => undefined as void')
})

export type PopoverCloseButtonProps = z.infer<typeof PopoverCloseButtonSchema>
