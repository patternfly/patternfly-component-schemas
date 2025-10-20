// Auto-generated Zod schema for ExpandableSectionState
import { z } from 'zod'

export const ExpandableSectionStateSchema = z.object({
  hasToggle: z.boolean(),
  isExpanded: z.boolean(),
  previousWidth: z.number()
})

export type ExpandableSectionStateProps = z.infer<typeof ExpandableSectionStateSchema>
