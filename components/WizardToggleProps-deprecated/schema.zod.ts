// Auto-generated Zod schema for WizardToggleProps-deprecated
import { z } from 'zod'

export const WizardTogglePropsSchema = z.object({
  /** The currently active WizardStep */
  activeStep: z.unknown(),
  /** The WizardFooter */
  children: z.custom<React.ReactNode>().optional(),
  /** Flag indicating the wizard has a drawer for at least one of the wizard steps */
  hasDrawer: z.boolean().optional(),
  /** Set to true to remove body padding */
  hasNoBodyPadding: z.boolean(),
  /** Flag indicating the wizard drawer is expanded */
  isDrawerExpanded: z.boolean().optional(),
  /** If the wizard is in-page */
  isInPage: z.boolean().optional(),
  /** If the nav is open */
  isNavOpen: z.boolean(),
  /** Adds an accessible name to the wizard body when the body content overflows and renders
a scrollbar. */
  mainAriaLabel: z.string().optional(),
  /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
The aria-labelledby will only be applied when the body content overflows and renders a scrollbar. */
  mainAriaLabelledBy: z.string().optional(),
  /** Function that returns the WizardNav component */
  nav: z.custom<React.ReactElement>(),
  /** Callback function for when the drawer is toggled */
  onExpandDrawer: z.custom<() => void>().optional(),
  /** Callback function for when the nav is toggled */
  onNavToggle: z.custom<(isOpen: boolean) => void>(),
  /** The wizard steps */
  steps: z.array(z.unknown()),
  /** The button's aria-label */
  'Unknown': z.string().optional()
})

export type WizardTogglePropsProps = z.infer<typeof WizardTogglePropsSchema>
