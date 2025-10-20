// Auto-generated Zod schema for WizardBodyProps
import { z } from 'zod'

export const WizardBodyPropsSchema = z.object({
  /** Anything that can be rendered in the Wizard body */
  children: z.custom<React.ReactNode>(),
  /** Additional classes spread to the wizard body */
  className: z.string().optional(),
  /** Component used as the wrapping content container */
  component: z.unknown().optional(),
  /** Flag to remove the default body padding */
  hasNoPadding: z.boolean().optional(),
  /** Adds an accessible name to the wrapper element by passing the the id of one or more elements.
The aria-labelledby will only be applied when the content overflows and renders a scrollbar. */
  'Unknown': z.string().optional()
})

export type WizardBodyPropsProps = z.infer<typeof WizardBodyPropsSchema>
