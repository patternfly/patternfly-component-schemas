// Auto-generated Zod schema for ExpandableSectionState
// Generated on: 2025-10-10T18:12:17.784Z
import { z } from 'zod'

export const ExpandableSectionStateSchema = z.object({
  hasToggle: z.boolean(),
  isExpanded: z.boolean(),
  previousWidth: z.number()
})

export type ExpandableSectionStateProps = z.infer<typeof ExpandableSectionStateSchema>
