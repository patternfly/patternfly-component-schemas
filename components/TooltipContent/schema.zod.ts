// Auto-generated Zod schema for TooltipContent
// Generated on: 2025-10-10T18:12:17.765Z
import { z } from 'zod'

export const TooltipContentSchema = z.object({
  /** PopoverContent content */
  children: z.any(),
  /** PopoverContent additional class */
  className: z.string().optional(),
  /** Flag to align text to the left */
  isLeftAligned: z.boolean().optional()
})

export type TooltipContentProps = z.infer<typeof TooltipContentSchema>
