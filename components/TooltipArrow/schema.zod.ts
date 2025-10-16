// Auto-generated Zod schema for TooltipArrow
// Generated on: 2025-10-16T18:56:01.616Z
import { z } from 'zod'

export const TooltipArrowSchema = z.object({
  /** className */
  className: z.string().optional()
})

export type TooltipArrowProps = z.infer<typeof TooltipArrowSchema>
