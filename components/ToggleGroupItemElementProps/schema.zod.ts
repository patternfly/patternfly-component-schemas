// Auto-generated Zod schema for ToggleGroupItemElementProps
// Generated on: 2025-10-16T19:25:27.746Z
import { z } from 'zod'

export const ToggleGroupItemElementPropsSchema = z.object({
  /** Content rendered inside the toggle group item */
  children: z.custom<React.ReactNode>().optional(),
  /** Adds toggle group item variant styles */
  variant: z.enum(['icon', 'text']).optional()
})

export type ToggleGroupItemElementPropsProps = z.infer<typeof ToggleGroupItemElementPropsSchema>
