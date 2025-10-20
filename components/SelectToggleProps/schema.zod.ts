// Auto-generated Zod schema for SelectToggleProps
import { z } from 'zod'

export const SelectTogglePropsSchema = z.object({
  /** Select toggle node. */
  toggleNode: z.custom<React.ReactNode>(),
  /** Reference to the toggle. */
  toggleRef: z.any().optional()
})

export type SelectTogglePropsProps = z.infer<typeof SelectTogglePropsSchema>
