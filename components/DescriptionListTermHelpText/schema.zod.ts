// Auto-generated Zod schema for DescriptionListTermHelpText
import { z } from 'zod'

export const DescriptionListTermHelpTextSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTermHelpText */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextProps = z.infer<typeof DescriptionListTermHelpTextSchema>
