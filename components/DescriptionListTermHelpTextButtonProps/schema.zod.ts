// Auto-generated Zod schema for DescriptionListTermHelpTextButtonProps
import { z } from 'zod'

export const DescriptionListTermHelpTextButtonPropsSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextButtonPropsProps = z.infer<typeof DescriptionListTermHelpTextButtonPropsSchema>
