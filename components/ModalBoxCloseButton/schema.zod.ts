// Auto-generated Zod schema for ModalBoxCloseButton
import { z } from 'zod'

export const ModalBoxCloseButtonSchema = z.object({
  /** Accessible descriptor of the close button. */
  'aria-label': z.string().optional().default('Close'),
  /** Additional classes added to the close button. */
  className: z.string().optional(),
  /** A callback for when the close button is clicked. */
  onClose: z.any().optional(),
  /** Value to set the data-ouia-component-id. */
  ouiaId: z.any().optional(),
  ouiaSafe: z.boolean().optional()
})

export type ModalBoxCloseButtonProps = z.infer<typeof ModalBoxCloseButtonSchema>
