// Auto-generated Zod schema for ModalBoxHeaderProps-deprecated
import { z } from 'zod'

export const ModalBoxHeaderPropsSchema = z.object({
  /** Content rendered inside the modal box header. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal box header. */
  className: z.string().optional(),
  /** Optional help section for the modal box header. */
  help: z.custom<React.ReactNode>().optional()
})

export type ModalBoxHeaderPropsProps = z.infer<typeof ModalBoxHeaderPropsSchema>
