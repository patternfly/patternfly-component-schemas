// Auto-generated Zod schema for PopoverHeaderText
// Generated on: 2025-10-16T19:25:27.755Z
import { z } from 'zod'

export const PopoverHeaderTextSchema = z.object({
  /** Content of the header text */
  children: z.custom<React.ReactNode>(),
  /** Class to be applied to the header text */
  className: z.string().optional(),
  /** Heading level of the header title */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
})

export type PopoverHeaderTextProps = z.infer<typeof PopoverHeaderTextSchema>
