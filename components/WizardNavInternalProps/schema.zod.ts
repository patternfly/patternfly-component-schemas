// Auto-generated Zod schema for WizardNavInternalProps
import { z } from 'zod'

export const WizardNavInternalPropsSchema = z.object({
  isNavExpanded: z.boolean(),
  nav: z.unknown(),
  navAriaLabel: z.string()
})

export type WizardNavInternalPropsProps = z.infer<typeof WizardNavInternalPropsSchema>
