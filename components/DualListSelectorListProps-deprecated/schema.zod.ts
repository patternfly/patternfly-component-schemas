// Auto-generated Zod schema for DualListSelectorListProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorListPropsSchema = z.object({
  /** Content rendered inside the dual list selector list */
  children: z.any().optional()
})

export type DualListSelectorListPropsProps = z.infer<typeof DualListSelectorListPropsSchema>
