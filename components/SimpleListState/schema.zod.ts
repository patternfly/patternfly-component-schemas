// Auto-generated Zod schema for SimpleListState
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SimpleListStateSchema = z.object({
  /** Ref of the current SimpleListItem */
  currentRef: z.any()
})

export type SimpleListStateProps = z.infer<typeof SimpleListStateSchema>
