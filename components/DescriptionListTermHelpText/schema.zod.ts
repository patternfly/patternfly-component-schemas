// Auto-generated Zod schema for DescriptionListTermHelpText
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const DescriptionListTermHelpTextSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.any(),
  /** Additional classes added to the DescriptionListTermHelpText */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextProps = z.infer<typeof DescriptionListTermHelpTextSchema>
