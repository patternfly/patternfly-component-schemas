// Auto-generated Zod schema for Stack
// Generated on: 2025-10-10T18:12:17.760Z
import { z } from 'zod'

export const StackSchema = z.object({
  /** Content rendered inside the stack layout. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the stack layout. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.any().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional().default(false)
})

export type StackProps = z.infer<typeof StackSchema>
