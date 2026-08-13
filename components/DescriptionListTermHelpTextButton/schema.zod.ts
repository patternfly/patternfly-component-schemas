// Auto-generated Zod schema for DescriptionListTermHelpTextButton
import { z } from 'zod'

export const DescriptionListTermHelpTextButtonSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextButtonProps = z.infer<typeof DescriptionListTermHelpTextButtonSchema>
