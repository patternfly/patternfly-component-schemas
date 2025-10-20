// Auto-generated Zod schema for SimpleListState
import { z } from 'zod'

export const SimpleListStateSchema = z.object({
  /** Ref of the current SimpleListItem */
  currentRef: z.any()
})

export type SimpleListStateProps = z.infer<typeof SimpleListStateSchema>
