// Auto-generated Zod schema for WizardFooterInternalProps-deprecated
// Generated on: 2025-10-10T18:12:17.797Z
import { z } from 'zod'

export const WizardFooterInternalPropsSchema = z.object({
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

export type WizardFooterInternalPropsProps = z.infer<typeof WizardFooterInternalPropsSchema>
