// Auto-generated Zod schema for SkipToContent
import { z } from 'zod'

export const SkipToContentSchema = z.object({
  /** Content to display within the skip to content component, typically a string. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional styles to apply to the skip to content component. */
  className: z.string().optional().default(''),
  /** The skip to content link. */
  href: z.string()
})

export type SkipToContentProps = z.infer<typeof SkipToContentSchema>
