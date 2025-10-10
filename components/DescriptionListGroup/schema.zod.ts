// Auto-generated Zod schema for DescriptionListGroup
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const DescriptionListGroupSchema = z.object({
  /** Any elements that can be rendered in the list group */
  children: z.any().optional(),
  /** Additional classes added to the DescriptionListGroup */
  className: z.string().optional()
})

export type DescriptionListGroupProps = z.infer<typeof DescriptionListGroupSchema>
