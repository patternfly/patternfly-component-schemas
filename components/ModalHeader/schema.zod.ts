// Auto-generated Zod schema for ModalHeader
import { z } from 'zod'

export const ModalHeaderSchema = z.object({
  /** Custom content rendered inside the modal header. If children are supplied then the tile, tileIconVariant and titleScreenReaderText props are ignored. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal header. */
  className: z.string().optional(),
  /** Description of the modal. */
  description: z.custom<React.ReactNode>().optional(),
  /** Id of the modal description. */
  descriptorId: z.string().optional(),
  /** Optional help section for the modal header. */
  help: z.custom<React.ReactNode>().optional(),
  /** Id of the modal title. */
  labelId: z.string().optional(),
  /** Content rendered inside the modal title. */
  title: z.custom<React.ReactNode>().optional(),
  /** Optional alert icon (or other) to show before the title. When the predefined alert types
are used the default styling will be automatically applied. */
  titleIconVariant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional(),
  /** Optional title label text for screen readers. */
  titleScreenReaderText: z.string().optional()
})

export type ModalHeaderProps = z.infer<typeof ModalHeaderSchema>
