// Auto-generated Zod schema for DualListSelectorListProps
// Generated on: 2025-10-16T19:25:27.772Z
import { z } from 'zod'

export const DualListSelectorListPropsSchema = z.object({
  /** Content rendered inside the dual list selector list. */
  children: z.custom<React.ReactNode>().optional(),
  innerRef: z.any().optional()
})

export type DualListSelectorListPropsProps = z.infer<typeof DualListSelectorListPropsSchema>
