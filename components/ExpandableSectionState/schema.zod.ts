// Auto-generated Zod schema for ExpandableSectionState
// Generated on: 2025-10-16T18:45:33.868Z
import { z } from 'zod'

export const ExpandableSectionStateSchema = z.object({
  hasToggle: z.boolean(),
  isExpanded: z.boolean(),
  previousWidth: z.number()
})

export type ExpandableSectionStateProps = z.infer<typeof ExpandableSectionStateSchema>
