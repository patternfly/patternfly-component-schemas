// Auto-generated Zod schema for WizardFooterProps
import { z } from 'zod'

export const WizardFooterPropsSchema = z.object({
  /** The active step */
  activeStep: z.unknown(),
  /** Additional props for the Back button. */
  backButtonProps: z.unknown().optional(),
  /** Custom text for the Back button */
  backButtonText: z.custom<React.ReactNode>().optional(),
  /** Additional props for the Cancel button. */
  cancelButtonProps: z.unknown().optional(),
  /** Custom text for the Cancel link */
  cancelButtonText: z.custom<React.ReactNode>().optional(),
  /** Additional classes spread to the wizard footer */
  className: z.string().optional(),
  /** Flag to disable the back button */
  isBackDisabled: z.boolean().optional(),
  /** Flag to hide the back button */
  isBackHidden: z.boolean().optional(),
  /** Flag to hide the cancel button */
  isCancelHidden: z.boolean().optional(),
  /** Flag to disable the next button */
  isNextDisabled: z.boolean().optional(),
  /** Additional props for the Next button. */
  nextButtonProps: z.enum(['type'']).optional(),
  /** Custom text for the Next button. The current step's nextButtonText takes precedence. */
  nextButtonText: z.custom<React.ReactNode>().optional(),
  /** Back button callback */
  onBack: z.any(),
  /** Cancel link callback */
  onClose: z.custom<Event>(),
  /** Next button callback */
  onNext: z.any()
})

export type WizardFooterPropsProps = z.infer<typeof WizardFooterPropsSchema>
