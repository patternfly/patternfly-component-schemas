// Auto-generated Zod schema for WizardNavInternal
// Generated on: 2025-10-10T18:12:17.763Z
import { z } from 'zod'

export const WizardNavInternalSchema = z.object({
  isNavExpanded: z.boolean(),
  nav: z.any(),
  navAriaLabel: z.string()
})

export type WizardNavInternalProps = z.infer<typeof WizardNavInternalSchema>
