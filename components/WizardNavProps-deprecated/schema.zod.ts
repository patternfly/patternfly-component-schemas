// Auto-generated Zod schema for WizardNavProps-deprecated
import { z } from 'zod'

export const WizardNavPropsSchema = z.object({
  /** children should be WizardNavItem components */
  children: z.unknown().optional(),
  /** Whether the nav is expanded */
  isOpen: z.boolean().optional(),
  /** True to return the inner list without the wrapping nav element */
  returnList: z.boolean().optional(),
  /** Sets the aria-labelledby attribute on the nav element */
  'Unknown': z.string().optional()
})

export type WizardNavPropsProps = z.infer<typeof WizardNavPropsSchema>
