// Auto-generated Zod schema for WizardBody-deprecated
import { z } from 'zod'

export const WizardBodySchema = z.object({
  /** The currently active WizardStep */
  activeStep: z.unknown(),
  /** Adds an accessible name to the wizard body when the body content overflows and renders
a scrollbar. */
  'aria-label': z.string().optional(),
  /** Adds an accessible name to the wizard body by passing the the id of one or more elements.
The aria-labelledby will only be applied when the body content overflows and renders a scrollbar. */
  'aria-labelledby': z.string(),
  /** Anything that can be rendered in the Wizard body */
  children: z.unknown(),
  hasDrawer: z.boolean().optional(),
  /** Set to true to remove the default body padding */
  hasNoBodyPadding: z.boolean().optional().default(false),
  /** Flag indicating the wizard drawer is expanded */
  isDrawerExpanded: z.boolean().optional(),
  /** Component used as the primary content container */
  mainComponent: z.unknown().optional().default('div'),
  /** Callback function for when the drawer is toggled */
  onExpandDrawer: z.custom<() => void>().optional()
})

export type WizardBodyProps = z.infer<typeof WizardBodySchema>
