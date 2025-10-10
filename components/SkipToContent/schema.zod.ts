// Auto-generated Zod schema for SkipToContent
// Generated on: 2025-10-10T18:12:17.769Z
import { z } from 'zod'

export const SkipToContentSchema = z.object({
  /** Content to display within the skip to content component, typically a string. */
  children: z.any().optional().default('null'),
  /** Additional styles to apply to the skip to content component. */
  className: z.string().optional().default(''),
  /** The skip to content link. */
  href: z.string()
})

export type SkipToContentProps = z.infer<typeof SkipToContentSchema>
