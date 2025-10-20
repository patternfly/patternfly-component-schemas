// Auto-generated Zod schema for Split
import { z } from 'zod'

export const SplitSchema = z.object({
  /** content rendered inside the split layout. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the split layout. */
  className: z.string().optional().default(''),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional().default('div'),
  /** Adds space between children. */
  hasGutter: z.boolean().optional().default(false),
  /** Allows children to wrap. */
  isWrappable: z.boolean().optional().default(false)
})

export type SplitProps = z.infer<typeof SplitSchema>
