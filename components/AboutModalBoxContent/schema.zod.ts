// Auto-generated Zod schema for AboutModalBoxContent
// Generated on: 2025-10-10T18:12:17.794Z
import { z } from 'zod'

export const AboutModalBoxContentSchema = z.object({
  /** Content rendered inside the about modal box content */
  children: z.any(),
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  hasNoContentContainer: z.boolean().optional().default(false),
  /** The trademark info for the product */
  trademark: z.string()
})

export type AboutModalBoxContentProps = z.infer<typeof AboutModalBoxContentSchema>
