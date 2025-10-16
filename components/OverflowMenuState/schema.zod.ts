// Auto-generated Zod schema for OverflowMenuState
// Generated on: 2025-10-16T19:25:27.757Z
import { z } from 'zod'

export const OverflowMenuStateSchema = z.object({
  breakpointRef: z.unknown(),
  isBelowBreakpoint: z.boolean()
})

export type OverflowMenuStateProps = z.infer<typeof OverflowMenuStateSchema>
