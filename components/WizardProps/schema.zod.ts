// Auto-generated Zod schema for WizardProps
import { z } from 'zod'

export const WizardPropsSchema = z.object({
  /** Step components */
  children: z.custom<React.ReactNode>(),
  /** Additional classes spread to the wizard */
  className: z.string().optional(),
  /** Wizard footer */
  footer: z.unknown().optional(),
  /** Wizard header */
  header: z.custom<React.ReactNode>().optional(),
  /** Custom height of the wizard */
  height: z.any().optional(),
  /** Progressively shows steps, where all steps following the active step are hidden. Defaults to false. */
  isProgressive: z.boolean().optional(),
  /** Disables steps that haven't been visited. Defaults to false. */
  isVisitRequired: z.boolean().optional(),
  /** Wizard navigation */
  nav: z.unknown().optional(),
  /** Aria-label for the Nav */
  navAriaLabel: z.string().optional(),
  /** Callback function to close the wizard */
  onClose: z.custom<Event>().optional(),
  /** Callback function to save at the end of the wizard, if not specified uses onClose */
  onSave: z.any().optional(),
  /** Callback function when navigating between steps */
  onStepChange: z.any().optional(),
  /** Flag indicating whether the wizard content should be focused after the onNext or onBack callbacks
are called. */
  shouldFocusContent: z.boolean().optional(),
  /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
  startIndex: z.number().optional(),
  /** Custom width of the wizard */
  width: z.any().optional()
})

export type WizardPropsProps = z.infer<typeof WizardPropsSchema>
