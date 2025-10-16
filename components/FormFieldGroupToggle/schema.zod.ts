// Auto-generated Zod schema for FormFieldGroupToggle
// Generated on: 2025-10-16T18:56:01.643Z
import { z } from 'zod'

export const FormFieldGroupToggleSchema = z.object({
  /** Aria label of the toggle button */
  'aria-label': z.string().optional(),
  /** Sets the aria-labelledby attribute on the toggle button element */
  'aria-labelledby': z.string().optional(),
  /** Additional classes added to the section */
  className: z.string().optional(),
  /** Flag indicating if the toggle is expanded */
  isExpanded: z.boolean(),
  /** Callback for onClick */
  onToggle: z.function(),
  /** The id applied to the toggle button */
  toggleId: z.string().optional()
})

export type FormFieldGroupToggleProps = z.infer<typeof FormFieldGroupToggleSchema>
