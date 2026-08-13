// Auto-generated Zod schema for DualListSelectorListProps-deprecated
import { z } from 'zod'

export const DualListSelectorListPropsSchema = z.object({
  /** Content rendered inside the dual list selector list */
  children: z.custom<React.ReactNode>().optional()
})

export type DualListSelectorListPropsProps = z.infer<typeof DualListSelectorListPropsSchema>
