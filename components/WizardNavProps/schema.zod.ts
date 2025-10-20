// Auto-generated Zod schema for WizardNavProps
import { z } from 'zod'

export const WizardNavPropsSchema = z.object({
  /** children should be WizardNavItem components */
  children: z.unknown().optional(),
  /** Additional classes spread to the wizard nav */
  className: z.string().optional(),
  /** Whether the navigation is expanded */
  isExpanded: z.boolean().optional(),
  /** True to return the inner list without the wrapping navigation element */
  isInnerList: z.boolean().optional(),
  /** Sets the aria-labelledby attribute on the navigation element */
  'Unknown': z.string().optional()
})

export type WizardNavPropsProps = z.infer<typeof WizardNavPropsSchema>
