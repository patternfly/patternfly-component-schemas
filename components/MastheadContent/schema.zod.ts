// Auto-generated Zod schema for MastheadContent
// Generated on: 2025-10-10T18:12:17.779Z
import { z } from 'zod'

export const MastheadContentSchema = z.object({
  /** Content rendered inside of the masthead content block. */
  children: z.any().optional(),
  /** Additional classes added to the masthead content. */
  className: z.string().optional()
})

export type MastheadContentProps = z.infer<typeof MastheadContentSchema>
