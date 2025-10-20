// Auto-generated Zod schema for OverflowMenuState
import { z } from 'zod'

export const OverflowMenuStateSchema = z.object({
  breakpointRef: z.unknown(),
  isBelowBreakpoint: z.boolean()
})

export type OverflowMenuStateProps = z.infer<typeof OverflowMenuStateSchema>
