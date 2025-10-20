// Auto-generated Zod schema for Stack
import { z } from 'zod'

export const StackSchema = z.object({
  /** Content rendered inside the stack layout. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the stack layout. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional().default(false)
})

export type StackProps = z.infer<typeof StackSchema>
