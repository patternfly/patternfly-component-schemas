// Auto-generated Zod schema for DescriptionListDescription
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const DescriptionListDescriptionSchema = z.object({
  /** Anything that can be rendered inside of list description */
  children: z.any().optional().default('null'),
  /** Additional classes added to the DescriptionListDescription */
  className: z.string().optional()
})

export type DescriptionListDescriptionProps = z.infer<typeof DescriptionListDescriptionSchema>
