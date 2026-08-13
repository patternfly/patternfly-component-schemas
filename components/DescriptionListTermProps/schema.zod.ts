// Auto-generated Zod schema for DescriptionListTermProps
import { z } from 'zod'

export const DescriptionListTermPropsSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional(),
  /** Icon that is rendered inside of list term to the left side of the children */
  icon: z.custom<React.ReactNode>().optional()
})

export type DescriptionListTermPropsProps = z.infer<typeof DescriptionListTermPropsSchema>
