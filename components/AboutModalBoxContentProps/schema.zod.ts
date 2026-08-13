// Auto-generated Zod schema for AboutModalBoxContentProps
import { z } from 'zod'

export const AboutModalBoxContentPropsSchema = z.object({
  /** Content rendered inside the about modal box content */
  children: z.custom<React.ReactNode>(),
  /** Prevents the about modal from rendering content inside a container; allows for more flexible layouts */
  hasNoContentContainer: z.boolean().optional(),
  /** The trademark info for the product */
  trademark: z.string()
})

export type AboutModalBoxContentPropsProps = z.infer<typeof AboutModalBoxContentPropsSchema>
