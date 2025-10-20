// Auto-generated Zod schema for WizardNav-deprecated
import { z } from 'zod'

export const WizardNavSchema = z.object({
  /** Aria-label applied to the nav element */
  'aria-label': z.string().optional(),
  /** Sets the aria-labelledby attribute on the nav element */
  'aria-labelledby': z.string().optional(),
  /** children should be WizardNavItem components */
  children: z.unknown().optional(),
  /** Whether the nav is expanded */
  isOpen: z.boolean().optional().default(false),
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional().default(true),
  /** True to return the inner list without the wrapping nav element */
  returnList: z.boolean().optional().default(false)
})

export type WizardNavProps = z.infer<typeof WizardNavSchema>
