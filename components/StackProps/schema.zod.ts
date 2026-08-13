// Auto-generated Zod schema for StackProps
import { z } from 'zod'

export const StackPropsSchema = z.object({
  /** Content rendered inside the stack layout. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the stack layout. */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional(),
  /** Adds space between children. */
  hasGutter: z.boolean().optional()
})

export type StackPropsProps = z.infer<typeof StackPropsSchema>
