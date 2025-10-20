// Auto-generated Zod schema for Wizard
import { z } from 'zod'

export const WizardSchema = z.object({
  /** Step components */
  children: z.custom<React.ReactNode>(),
  /** Additional classes spread to the wizard */
  className: z.string().optional(),
  /** Wizard footer */
  footer: z.any().optional(),
  /** Wizard header */
  header: z.custom<React.ReactNode>().optional(),
  /** Custom height of the wizard */
  height: z.any().optional(),
  /** Progressively shows steps, where all steps following the active step are hidden. Defaults to false. */
  isProgressive: z.boolean().optional().default(false),
  /** Disables steps that haven't been visited. Defaults to false. */
  isVisitRequired: z.boolean().optional().default(false),
  /** Wizard navigation */
  nav: z.any().optional(),
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
  shouldFocusContent: z.boolean().optional().default(true),
  /** The initial index the wizard is to start on (1 or higher). Defaults to 1. */
  startIndex: z.number().optional().default(1),
  /** Custom width of the wizard */
  width: z.any().optional()
})

export type WizardProps = z.infer<typeof WizardSchema>
