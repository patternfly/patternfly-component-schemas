// Auto-generated Zod schema for WizardToggle
// Generated on: 2025-10-10T18:12:17.763Z
import { z } from 'zod'

export const WizardToggleSchema = z.object({
  /** The current step */
  activeStep: z.any(),
  /** The expandable dropdown button's aria-label */
  'aria-label': z.string().optional().default('Wizard toggle'),
  /** Wizard footer */
  footer: z.any(),
  /** Flag to determine whether the dropdown navigation is expanded */
  isNavExpanded: z.boolean().optional(),
  /** Wizard navigation */
  nav: z.any(),
  /** List of steps and/or sub-steps */
  steps: z.array(z.any()),
  /** Callback to expand or collapse the dropdown navigation */
  toggleNavExpanded: z.any().optional()
})

export type WizardToggleProps = z.infer<typeof WizardToggleSchema>
