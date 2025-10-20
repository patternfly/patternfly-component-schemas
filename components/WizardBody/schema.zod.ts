// Auto-generated Zod schema for WizardBody
import { z } from 'zod'

export const WizardBodySchema = z.object({
  /** Adds an accessible name to the wrapper element when the content overflows and renders
a scrollbar. */
  'aria-label': z.string().optional(),
  /** Adds an accessible name to the wrapper element by passing the the id of one or more elements.
The aria-labelledby will only be applied when the content overflows and renders a scrollbar. */
  'aria-labelledby': z.string().optional(),
  /** Anything that can be rendered in the Wizard body */
  children: z.custom<React.ReactNode>(),
  /** Additional classes spread to the wizard body */
  className: z.string().optional(),
  /** Component used as the wrapping content container */
  component: z.unknown().optional().default('div'),
  /** Flag to remove the default body padding */
  hasNoPadding: z.boolean().optional().default(false)
})

export type WizardBodyProps = z.infer<typeof WizardBodySchema>
