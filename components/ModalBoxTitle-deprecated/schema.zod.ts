// Auto-generated Zod schema for ModalBoxTitle-deprecated
import { z } from 'zod'

export const ModalBoxTitleSchema = z.object({
  /** Additional classes added to the modal box title. */
  className: z.string().optional().default(''),
  /** Id of the modal box title. */
  id: z.string(),
  /** Content rendered inside the modal box title. */
  title: z.custom<React.ReactNode>(),
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
are used the default styling will be automatically applied. */
  titleIconVariant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Optional title label text for screen readers. */
  titleLabel: z.string().optional().default('')
})

export type ModalBoxTitleProps = z.infer<typeof ModalBoxTitleSchema>
