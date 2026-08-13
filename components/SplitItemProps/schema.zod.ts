// Auto-generated Zod schema for SplitItemProps
import { z } from 'zod'

export const SplitItemPropsSchema = z.object({
  /** Content rendered inside the split layout item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the split layout item. */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if this split layout item should fill the available horizontal space. */
  isFilled: z.boolean().optional()
})

export type SplitItemPropsProps = z.infer<typeof SplitItemPropsSchema>
