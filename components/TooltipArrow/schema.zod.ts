// Auto-generated Zod schema for TooltipArrow
import { z } from 'zod'

export const TooltipArrowSchema = z.object({
  /** className */
  className: z.string().optional()
})

export type TooltipArrowProps = z.infer<typeof TooltipArrowSchema>
