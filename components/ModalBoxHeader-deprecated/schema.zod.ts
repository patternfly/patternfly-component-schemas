// Auto-generated Zod schema for ModalBoxHeader-deprecated
// Generated on: 2025-10-16T19:25:27.783Z
import { z } from 'zod'

export const ModalBoxHeaderSchema = z.object({
  /** Content rendered inside the modal box header. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the modal box header. */
  className: z.string().optional().default(''),
  /** Optional help section for the modal box header. */
  help: z.custom<React.ReactNode>().optional().default('null')
})

export type ModalBoxHeaderProps = z.infer<typeof ModalBoxHeaderSchema>
