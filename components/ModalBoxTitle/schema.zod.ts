// Auto-generated Zod schema for ModalBoxTitle
import { z } from 'zod'

export const ModalBoxTitleSchema = z.object({
  /** Additional classes added to the modal box title. */
  className: z.string().optional(),
  /** Id of the modal box title. */
  id: z.string().optional(),
  /** Content rendered inside the modal box title. */
  title: z.custom<React.ReactNode>(),
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
are used the default styling will be automatically applied. */
  titleIconVariant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Optional title label text for screen readers. */
  titleScreenReaderText: z.string().optional()
})

export type ModalBoxTitleProps = z.infer<typeof ModalBoxTitleSchema>
