// Auto-generated Zod schema for InputGroupItem
import { z } from 'zod'

export const InputGroupItemSchema = z.object({
  /** Content rendered inside the input group item. */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the input group item. */
  className: z.string().optional(),
  /** Enables box styling to the input group item */
  isBox: z.boolean().optional().default(false),
  /** Flag to indicate if the input group item is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to indicate if the input group item should fill the available horizontal space */
  isFill: z.boolean().optional().default(false),
  /** Flag to indicate if the input group item is plain. */
  isPlain: z.boolean().optional()
})

export type InputGroupItemProps = z.infer<typeof InputGroupItemSchema>
