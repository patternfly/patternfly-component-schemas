// Auto-generated Zod schema for DropdownToggleProps
import { z } from 'zod'

export const DropdownTogglePropsSchema = z.object({
  /** Dropdown toggle node. */
  toggleNode: z.custom<React.ReactNode>(),
  /** Reference to the toggle. */
  toggleRef: z.any().optional()
})

export type DropdownTogglePropsProps = z.infer<typeof DropdownTogglePropsSchema>
