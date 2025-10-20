// Auto-generated Zod schema for TextArea
import { z } from 'zod'

export const TextAreaSchema = z.object({
  /** Custom flag to show that the text area requires an associated id or aria-label. */
  'aria-label': z.string().optional(),
  /** Flag to modify height based on contents. */
  autoResize: z.boolean().optional(),
  /** Additional classes added to the text area. */
  className: z.string().optional(),
  /** Flag to show if the text area is disabled. */
  isDisabled: z.boolean().optional(),
  /** Flag to show if the text area is required. */
  isRequired: z.boolean().optional(),
  /** A callback for when the text area value changes. */
  onChange: z.custom<Event>().optional(),
  /** Read only variant. */
  readOnlyVariant: z.enum(['default', 'plain']).optional(),
  /** Sets the orientation to limit the resize to */
  resizeOrientation: z.enum(['horizontal', 'vertical', 'both', 'none']).optional(),
  /** Value to indicate if the text area is modified to show that validation state.
If set to success, text area will be modified to indicate valid state.
If set to error, text area will be modified to indicate error state. */
  validated: z.enum(['success', 'warning', 'error', 'default']).optional(),
  /** Value of the text area. */
  value: z.any().optional()
})

export type TextAreaProps = z.infer<typeof TextAreaSchema>
