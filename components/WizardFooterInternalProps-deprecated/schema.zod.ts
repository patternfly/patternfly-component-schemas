// Auto-generated Zod schema for WizardFooterInternalProps-deprecated
import { z } from 'zod'

export const WizardFooterInternalPropsSchema = z.object({
  activeStep: z.unknown(),
  backButtonText: z.custom<React.ReactNode>(),
  cancelButtonText: z.custom<React.ReactNode>(),
  firstStep: z.boolean(),
  isValid: z.boolean(),
  nextButtonText: z.custom<React.ReactNode>(),
  onBack: z.unknown(),
  onClose: z.unknown(),
  onNext: z.unknown()
})

export type WizardFooterInternalPropsProps = z.infer<typeof WizardFooterInternalPropsSchema>
