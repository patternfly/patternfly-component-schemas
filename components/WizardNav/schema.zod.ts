// Auto-generated Zod schema for WizardNav
// Generated on: 2025-10-10T18:12:17.763Z
import { z } from 'zod'

export const WizardNavSchema = z.object({
  /** Aria-label applied to the navigation element */
  'aria-label': z.string().optional(),
  /** Sets the aria-labelledby attribute on the navigation element */
  'aria-labelledby': z.string().optional(),
  /** children should be WizardNavItem components */
  children: z.any().optional(),
  /** Additional classes spread to the wizard nav */
  className: z.string().optional(),
  /** Whether the navigation is expanded */
  isExpanded: z.boolean().optional().default(false),
  /** True to return the inner list without the wrapping navigation element */
  isInnerList: z.boolean().optional().default(false)
})

export type WizardNavProps = z.infer<typeof WizardNavSchema>
