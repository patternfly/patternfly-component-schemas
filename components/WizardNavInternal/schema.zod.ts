// Auto-generated Zod schema for WizardNavInternal
// Generated on: 2025-10-16T19:02:51.719Z
import { z } from 'zod'

export const WizardNavInternalSchema = z.object({
  isNavExpanded: z.boolean(),
  nav: z.unknown(),
  navAriaLabel: z.string()
})

export type WizardNavInternalProps = z.infer<typeof WizardNavInternalSchema>
