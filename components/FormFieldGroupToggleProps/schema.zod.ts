// Auto-generated Zod schema for FormFieldGroupToggleProps
import { z } from 'zod'

export const FormFieldGroupTogglePropsSchema = z.object({
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Flag indicating if the toggle is expanded */
  isExpanded: z.boolean(),
  /** Callback for onClick */
  onToggle: z.custom<() => void>(),
  /** The id applied to the toggle button */
  toggleId: z.string().optional(),
  /** Sets the aria-labelledby attribute on the toggle button element */
  'Unknown': z.string().optional()
})

export type FormFieldGroupTogglePropsProps = z.infer<typeof FormFieldGroupTogglePropsSchema>
