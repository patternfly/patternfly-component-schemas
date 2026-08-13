// Auto-generated Zod schema for DescriptionListTermHelpTextProps
import { z } from 'zod'

export const DescriptionListTermHelpTextPropsSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTermHelpText */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextPropsProps = z.infer<typeof DescriptionListTermHelpTextPropsSchema>
