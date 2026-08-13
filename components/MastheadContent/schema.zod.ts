// Auto-generated Zod schema for MastheadContent
import { z } from 'zod'

export const MastheadContentSchema = z.object({
  /** Content rendered inside of the masthead content block. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the masthead content. */
  className: z.string().optional()
})

export type MastheadContentProps = z.infer<typeof MastheadContentSchema>
