// Auto-generated Zod schema for StackItem
import { z } from 'zod'

export const StackItemSchema = z.object({
  /** Additional classes added to the stack layout item. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Content rendered inside the stack layout item. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional().default('div'),
  /** Flag indicating if this stack layout item should fill the available vertical space. */
  isFilled: z.boolean().optional().default(false)
})

export type StackItemProps = z.infer<typeof StackItemSchema>
