// Auto-generated Zod schema for SplitProps
import { z } from 'zod'

export const SplitPropsSchema = z.object({
  /** content rendered inside the split layout. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the split layout. */
  className: z.string().optional(),
  /** Sets the base component to render. Defaults to div. */
  component: z.custom<React.ReactNode>().optional(),
  /** Adds space between children. */
  hasGutter: z.boolean().optional(),
  /** Allows children to wrap. */
  isWrappable: z.boolean().optional()
})

export type SplitPropsProps = z.infer<typeof SplitPropsSchema>
