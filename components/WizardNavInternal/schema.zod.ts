// Auto-generated Zod schema for WizardNavInternal
import { z } from 'zod'

export const WizardNavInternalSchema = z.object({
  isNavExpanded: z.boolean(),
  nav: z.unknown(),
  navAriaLabel: z.string()
})

export type WizardNavInternalProps = z.infer<typeof WizardNavInternalSchema>
