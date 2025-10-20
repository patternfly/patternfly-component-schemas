// Auto-generated Zod schema for ModalBoxTitleProps-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxTitlePropsSchema = z.object({
  /** Additional classes added to the modal box title. */
  className: z.string().optional(),
  /** Id of the modal box title. */
  id: z.string(),
  /** Content rendered inside the modal box title. */
  title: z.any(),
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
are used the default styling will be automatically applied. */
  titleIconVariant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Optional title label text for screen readers. */
  titleLabel: z.string().optional()
})

export type ModalBoxTitlePropsProps = z.infer<typeof ModalBoxTitlePropsSchema>
