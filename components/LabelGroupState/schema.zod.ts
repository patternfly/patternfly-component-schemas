// Auto-generated Zod schema for LabelGroupState
// Generated on: 2025-10-16T19:25:27.766Z
import { z } from 'zod'

export const LabelGroupStateSchema = z.object({
  isOpen: z.boolean(),
  isTooltipVisible: z.boolean()
})

export type LabelGroupStateProps = z.infer<typeof LabelGroupStateSchema>
