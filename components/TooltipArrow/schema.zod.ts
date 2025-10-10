// Auto-generated Zod schema for TooltipArrow
// Generated on: 2025-10-10T18:12:17.765Z
import { z } from 'zod'

export const TooltipArrowSchema = z.object({
  /** className */
  className: z.string().optional()
})

export type TooltipArrowProps = z.infer<typeof TooltipArrowSchema>
