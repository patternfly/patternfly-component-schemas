// Auto-generated Zod schema for ModalBoxCloseButtonProps-deprecated
// Generated on: 2025-10-10T18:12:17.796Z
import { z } from 'zod'

export const ModalBoxCloseButtonPropsSchema = z.object({
  /** Additional classes added to the close button. */
  className: z.string().optional(),
  /** A callback for when the close button is clicked. */
  onClose: z.any().optional(),
  /** Value to set the data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Accessible descriptor of the close button. */
  'Unknown': z.string().optional()
})

export type ModalBoxCloseButtonPropsProps = z.infer<typeof ModalBoxCloseButtonPropsSchema>
