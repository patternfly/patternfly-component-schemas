// Auto-generated Zod schema for TooltipContent
import { z } from 'zod'

export const TooltipContentSchema = z.object({
  /** PopoverContent content */
  children: z.custom<React.ReactNode>(),
  /** PopoverContent additional class */
  className: z.string().optional(),
  /** Flag to align text to the left */
  isLeftAligned: z.boolean().optional()
})

export type TooltipContentProps = z.infer<typeof TooltipContentSchema>
