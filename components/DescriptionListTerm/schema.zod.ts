// Auto-generated Zod schema for DescriptionListTerm
import { z } from 'zod'

export const DescriptionListTermSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional(),
  /** Icon that is rendered inside of list term to the left side of the children */
  icon: z.custom<React.ReactNode>().optional()
})

export type DescriptionListTermProps = z.infer<typeof DescriptionListTermSchema>
