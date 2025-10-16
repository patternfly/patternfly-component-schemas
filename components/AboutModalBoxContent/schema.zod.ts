// Auto-generated Zod schema for AboutModalBoxContent
// Generated on: 2025-10-16T19:25:27.782Z
import { z } from 'zod'

export const AboutModalBoxContentSchema = z.object({
  /** Content rendered inside the about modal box content */
  children: z.custom<React.ReactNode>(),
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  hasNoContentContainer: z.boolean().optional().default(false),
  /** The trademark info for the product */
  trademark: z.string()
})

export type AboutModalBoxContentProps = z.infer<typeof AboutModalBoxContentSchema>
