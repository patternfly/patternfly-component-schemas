// Auto-generated Zod schema for SelectToggleProps
// Generated on: 2025-10-16T18:45:33.846Z
import { z } from 'zod'

export const SelectTogglePropsSchema = z.object({
  /** Select toggle node. */
  toggleNode: z.custom<React.ReactNode>(),
  /** Reference to the toggle. */
  toggleRef: z.any().optional()
})

export type SelectTogglePropsProps = z.infer<typeof SelectTogglePropsSchema>
