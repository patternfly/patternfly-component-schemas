// Auto-generated Zod schema for WizardContextProviderProps
import { z } from 'zod'

export const WizardContextProviderPropsSchema = z.object({
  activeStepIndex: z.number(),
  children: z.custom<React.ReactElement>(),
  footer: z.unknown(),
  goToStepById: z.unknown(),
  goToStepByIndex: z.unknown(),
  goToStepByName: z.unknown(),
  mainWrapperRef: z.any(),
  onBack: z.unknown(),
  onClose: z.unknown().optional(),
  onNext: z.unknown(),
  shouldFocusContent: z.boolean(),
  steps: z.array(z.unknown())
})

export type WizardContextProviderPropsProps = z.infer<typeof WizardContextProviderPropsSchema>
