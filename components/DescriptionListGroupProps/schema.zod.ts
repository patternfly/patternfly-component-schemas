// Auto-generated Zod schema for DescriptionListGroupProps
import { z } from 'zod'

export const DescriptionListGroupPropsSchema = z.object({
  /** Any elements that can be rendered in the list group */
  children: z.unknown().optional(),
  /** Additional classes added to the DescriptionListGroup */
  className: z.string().optional()
})

export type DescriptionListGroupPropsProps = z.infer<typeof DescriptionListGroupPropsSchema>
