// Auto-generated Zod schema for ModalBoxHeaderProps-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxHeaderPropsSchema = z.object({
  /** Content rendered inside the modal box header. */
  children: z.any().optional(),
  /** Additional classes added to the modal box header. */
  className: z.string().optional(),
  /** Optional help section for the modal box header. */
  help: z.any().optional()
})

export type ModalBoxHeaderPropsProps = z.infer<typeof ModalBoxHeaderPropsSchema>
