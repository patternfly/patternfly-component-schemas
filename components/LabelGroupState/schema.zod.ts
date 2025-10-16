// Auto-generated Zod schema for LabelGroupState
// Generated on: 2025-10-16T18:45:33.865Z
import { z } from 'zod'

export const LabelGroupStateSchema = z.object({
  isOpen: z.boolean(),
  isTooltipVisible: z.boolean()
})

export type LabelGroupStateProps = z.infer<typeof LabelGroupStateSchema>
