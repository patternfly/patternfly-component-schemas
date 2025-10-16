// Auto-generated Zod schema for WizardContextProps
// Generated on: 2025-10-16T18:56:01.614Z
import { z } from 'zod'

export const WizardContextPropsSchema = z.object({
  /** Current step */
  activeStep: z.unknown(),
  /** Close the wizard */
  close: z.function(),
  /** Footer element */
  footer: z.custom<React.ReactElement>(),
  /** Get step by ID */
  getStep: z.any(),
  /** Navigate to the next step */
  goToNextStep: z.any(),
  /** Navigate to the previous step */
  goToPrevStep: z.any(),
  /** Navigate to step by ID */
  goToStepById: z.any(),
  /** Navigate to step by index */
  goToStepByIndex: z.function(),
  /** Navigate to step by name */
  goToStepByName: z.function(),
  /** Ref for main wizard content element. */
  mainWrapperRef: z.any(),
  /** Update the footer with any react element */
  setFooter: z.any(),
  /** Set step by ID */
  setStep: z.function(),
  /** Flag indicating whether the wizard content should be focused after the onNext or onBack callbacks
are called. */
  shouldFocusContent: z.boolean(),
  /** List of steps */
  steps: z.array(z.unknown())
})

export type WizardContextPropsProps = z.infer<typeof WizardContextPropsSchema>
