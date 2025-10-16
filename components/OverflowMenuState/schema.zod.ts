// Auto-generated Zod schema for OverflowMenuState
// Generated on: 2025-10-16T18:45:33.850Z
import { z } from 'zod'

export const OverflowMenuStateSchema = z.object({
  breakpointRef: z.unknown(),
  isBelowBreakpoint: z.boolean()
})

export type OverflowMenuStateProps = z.infer<typeof OverflowMenuStateSchema>
