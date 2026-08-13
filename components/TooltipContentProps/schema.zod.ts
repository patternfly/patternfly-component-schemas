// Auto-generated Zod schema for TooltipContentProps
import { z } from 'zod'

export const TooltipContentPropsSchema = z.object({
  /** PopoverContent content */
  children: z.custom<React.ReactNode>(),
  /** PopoverContent additional class */
  className: z.string().optional(),
  /** Flag to align text to the left */
  isLeftAligned: z.boolean().optional()
})

export type TooltipContentPropsProps = z.infer<typeof TooltipContentPropsSchema>
