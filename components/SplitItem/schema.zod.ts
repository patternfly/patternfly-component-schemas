// Auto-generated Zod schema for SplitItem
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const SplitItemSchema = z.object({
  /** Content rendered inside the split layout item. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the split layout item. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.any().optional().default('div'),
  /** Flag indicating if this split layout item should fill the available horizontal space. */
  isFilled: z.boolean().optional().default(false)
})

export type SplitItemProps = z.infer<typeof SplitItemSchema>
