// Auto-generated Zod schema for OverflowMenuState
// Generated on: 2025-10-10T18:12:17.773Z
import { z } from 'zod'

export const OverflowMenuStateSchema = z.object({
  breakpointRef: z.any(),
  isBelowBreakpoint: z.boolean()
})

export type OverflowMenuStateProps = z.infer<typeof OverflowMenuStateSchema>
