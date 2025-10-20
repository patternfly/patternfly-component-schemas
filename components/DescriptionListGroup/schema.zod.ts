// Auto-generated Zod schema for DescriptionListGroup
import { z } from 'zod'

export const DescriptionListGroupSchema = z.object({
  /** Any elements that can be rendered in the list group */
  children: z.unknown().optional(),
  /** Additional classes added to the DescriptionListGroup */
  className: z.string().optional()
})

export type DescriptionListGroupProps = z.infer<typeof DescriptionListGroupSchema>
