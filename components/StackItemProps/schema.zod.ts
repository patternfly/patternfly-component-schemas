// Auto-generated Zod schema for StackItemProps
import { z } from 'zod'

export const StackItemPropsSchema = z.object({
  /** Additional classes added to the stack layout item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the stack layout item. */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if this stack layout item should fill the available vertical space. */
  isFilled: z.boolean().optional()
})

export type StackItemPropsProps = z.infer<typeof StackItemPropsSchema>
