// Auto-generated Zod schema for WizardToggle
import { z } from 'zod'

export const WizardToggleSchema = z.object({
  /** The current step */
  activeStep: z.any(),
  /** The expandable dropdown button's aria-label */
  'aria-label': z.string().optional().default('Wizard toggle'),
  /** Wizard footer */
  footer: z.custom<React.ReactElement>(),
  /** Flag to determine whether the dropdown navigation is expanded */
  isNavExpanded: z.boolean().optional(),
  /** Wizard navigation */
  nav: z.custom<React.ReactElement>(),
  /** List of steps and/or sub-steps */
  steps: z.array(z.unknown()),
  /** Callback to expand or collapse the dropdown navigation */
  toggleNavExpanded: z.any().optional()
})

export type WizardToggleProps = z.infer<typeof WizardToggleSchema>
