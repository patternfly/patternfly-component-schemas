// Auto-generated Zod schema for WizardToggleProps
import { z } from 'zod'

export const WizardTogglePropsSchema = z.object({
  /** The current step */
  activeStep: z.unknown(),
  /** Wizard footer */
  footer: z.custom<React.ReactElement>(),
  /** Flag to determine whether the dropdown navigation is expanded */
  isNavExpanded: z.boolean().optional(),
  /** Wizard navigation */
  nav: z.custom<React.ReactElement>(),
  /** List of steps and/or sub-steps */
  steps: z.array(z.unknown()),
  /** Callback to expand or collapse the dropdown navigation */
  toggleNavExpanded: z.any().optional(),
  /** The expandable dropdown button's aria-label */
  'Unknown': z.string().optional()
})

export type WizardTogglePropsProps = z.infer<typeof WizardTogglePropsSchema>
