// Auto-generated Zod schema for WizardState-deprecated
import { z } from 'zod'

export const WizardStateSchema = z.object({
  currentStep: z.number(),
  isNavOpen: z.boolean()
})

export type WizardStateProps = z.infer<typeof WizardStateSchema>
