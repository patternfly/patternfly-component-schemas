// Auto-generated Zod schema for PopoverHeaderText
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverHeaderTextSchema = z.object({
  /** Content of the header text */
  children: z.any(),
  /** Class to be applied to the header text */
  className: z.string().optional(),
  /** Heading level of the header title */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
})

export type PopoverHeaderTextProps = z.infer<typeof PopoverHeaderTextSchema>
