// Auto-generated Zod schema for DescriptionListTerm
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const DescriptionListTermSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.any(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional(),
  /** Icon that is rendered inside of list term to the left side of the children */
  icon: z.any().optional()
})

export type DescriptionListTermProps = z.infer<typeof DescriptionListTermSchema>
