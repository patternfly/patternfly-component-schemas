// Auto-generated Zod schema for WizardFooterInternal-deprecated
// Generated on: 2025-10-10T18:12:17.797Z
import { z } from 'zod'

export const WizardFooterInternalSchema = z.object({
  activeStep: z.any(),
  backButtonText: z.any(),
  cancelButtonText: z.any(),
  firstStep: z.boolean(),
  isValid: z.boolean(),
  nextButtonText: z.any(),
  onBack: z.any(),
  onClose: z.any(),
  onNext: z.any()
})

export type WizardFooterInternalProps = z.infer<typeof WizardFooterInternalSchema>
