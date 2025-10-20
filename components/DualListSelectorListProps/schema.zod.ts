// Auto-generated Zod schema for DualListSelectorListProps
import { z } from 'zod'

export const DualListSelectorListPropsSchema = z.object({
  /** Content rendered inside the dual list selector list. */
  children: z.custom<React.ReactNode>().optional(),
  innerRef: z.any().optional()
})

export type DualListSelectorListPropsProps = z.infer<typeof DualListSelectorListPropsSchema>
