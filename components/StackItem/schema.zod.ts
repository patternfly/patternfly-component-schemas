// Auto-generated Zod schema for StackItem
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const StackItemSchema = z.object({
  /** Additional classes added to the stack layout item. */
  children: z.any().optional().default('null'),
  /** Content rendered inside the stack layout item. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.any().optional().default('div'),
  /** Flag indicating if this stack layout item should fill the available vertical space. */
  isFilled: z.boolean().optional().default(false)
})

export type StackItemProps = z.infer<typeof StackItemSchema>
