// Auto-generated Zod schema for DualListSelectorList-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorListSchema = z.object({
  /** Content rendered inside the dual list selector list */
  children: z.any().optional()
})

export type DualListSelectorListProps = z.infer<typeof DualListSelectorListSchema>
