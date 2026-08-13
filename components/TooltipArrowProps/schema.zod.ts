// Auto-generated Zod schema for TooltipArrowProps
import { z } from 'zod'

export const TooltipArrowPropsSchema = z.object({
  /** className */
  className: z.string().optional()
})

export type TooltipArrowPropsProps = z.infer<typeof TooltipArrowPropsSchema>
