// Auto-generated Zod schema for LabelGroupState
import { z } from 'zod'

export const LabelGroupStateSchema = z.object({
  isOpen: z.boolean(),
  isTooltipVisible: z.boolean()
})

export type LabelGroupStateProps = z.infer<typeof LabelGroupStateSchema>
