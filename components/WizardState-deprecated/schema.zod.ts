// Auto-generated Zod schema for WizardState-deprecated
// Generated on: 2025-10-16T19:25:27.784Z
import { z } from 'zod'

export const WizardStateSchema = z.object({
  currentStep: z.number(),
  isNavOpen: z.boolean()
})

export type WizardStateProps = z.infer<typeof WizardStateSchema>
