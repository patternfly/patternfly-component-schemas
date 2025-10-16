// Auto-generated Zod schema for WizardState-deprecated
// Generated on: 2025-10-16T18:56:01.663Z
import { z } from 'zod'

export const WizardStateSchema = z.object({
  currentStep: z.number(),
  isNavOpen: z.boolean()
})

export type WizardStateProps = z.infer<typeof WizardStateSchema>
