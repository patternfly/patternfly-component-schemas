// Auto-generated Zod schema for DualListSelectorList-deprecated
import { z } from 'zod'

export const DualListSelectorListSchema = z.object({
  /** Content rendered inside the dual list selector list */
  children: z.custom<React.ReactNode>().optional()
})

export type DualListSelectorListProps = z.infer<typeof DualListSelectorListSchema>
