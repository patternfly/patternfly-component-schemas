// Auto-generated Zod schema for ModalBoxBodyProps-deprecated
// Generated on: 2025-10-10T18:12:17.796Z
import { z } from 'zod'

export const ModalBoxBodyPropsSchema = z.object({
  /** Content rendered inside the modal box body. */
  children: z.any().optional(),
  /** Additional classes added to the modal box body. */
  className: z.string().optional()
})

export type ModalBoxBodyPropsProps = z.infer<typeof ModalBoxBodyPropsSchema>
