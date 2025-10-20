// Auto-generated Zod schema for WizardStep-deprecated
import { z } from 'zod'

export const WizardStepSchema = z.object({
  /** Enables or disables the step in the navigation. Enabled by default. */
  canJumpTo: z.boolean().optional(),
  /** The component to render in the main body */
  component: z.unknown().optional(),
  /** The content to render in the drawer panel (use when hasDrawer prop is set on the wizard). */
  drawerPanelContent: z.unknown().optional(),
  /** Custom drawer toggle button that opens the drawer. */
  drawerToggleButton: z.custom<React.ReactNode>().optional(),
  /** (Unused if footer is controlled) The condition needed to enable the Next button */
  enableNext: z.boolean().optional(),
  /** (Unused if footer is controlled) True to hide the Back button */
  hideBackButton: z.boolean().optional(),
  /** (Unused if footer is controlled) True to hide the Cancel button */
  hideCancelButton: z.boolean().optional(),
  /** Optional identifier */
  id: z.any().optional(),
  /** Flag to disable the step in the navigation */
  isDisabled: z.boolean().optional(),
  /** Setting to true hides the side nav and footer */
  isFinishedStep: z.boolean().optional(),
  /** The name of the step */
  name: z.custom<React.ReactNode>(),
  /** (Unused if footer is controlled) Can change the Next button text. If nextButtonText is also set for the Wizard, this step specific one overrides it. */
  nextButtonText: z.custom<React.ReactNode>().optional(),
  /** Props to pass to the WizardNavItem */
  stepNavItemProps: z.any().optional(),
  /** Sub steps */
  steps: z.array(z.unknown()).optional()
})

export type WizardStepProps = z.infer<typeof WizardStepSchema>
