// Auto-generated Zod schema for SkipToContentProps
import { z } from 'zod'

export const SkipToContentPropsSchema = z.object({
  /** Content to display within the skip to content component, typically a string. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional styles to apply to the skip to content component. */
  className: z.string().optional(),
  /** The skip to content link. */
  href: z.string()
})

export type SkipToContentPropsProps = z.infer<typeof SkipToContentPropsSchema>
