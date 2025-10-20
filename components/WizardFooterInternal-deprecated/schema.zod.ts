// Auto-generated Zod schema for WizardFooterInternal-deprecated
import { z } from 'zod'

export const WizardFooterInternalSchema = z.object({
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

export type WizardFooterInternalProps = z.infer<typeof WizardFooterInternalSchema>
