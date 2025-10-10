// Auto-generated Zod schema for DescriptionListTermHelpTextButton
// Generated on: 2025-10-10T18:12:17.788Z
import { z } from 'zod'

export const DescriptionListTermHelpTextButtonSchema = z.object({
  /** Anything that can be rendered inside of list term */
  children: z.any(),
  /** Additional classes added to the DescriptionListTerm */
  className: z.string().optional()
})

export type DescriptionListTermHelpTextButtonProps = z.infer<typeof DescriptionListTermHelpTextButtonSchema>
