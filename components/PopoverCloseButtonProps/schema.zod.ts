// Auto-generated Zod schema for PopoverCloseButtonProps
// Generated on: 2025-10-16T19:02:51.732Z
import { z } from 'zod'

export const PopoverCloseButtonPropsSchema = z.object({
  /** PopoverCloseButton onClose function */
  onClose: z.function().optional(),
  /** Aria label for the Close button */
  'Unknown': z.string()
})

export type PopoverCloseButtonPropsProps = z.infer<typeof PopoverCloseButtonPropsSchema>
