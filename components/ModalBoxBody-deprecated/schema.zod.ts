// Auto-generated Zod schema for ModalBoxBody-deprecated
// Generated on: 2025-10-10T18:12:17.796Z
import { z } from 'zod'

export const ModalBoxBodySchema = z.object({
  /** Content rendered inside the modal box body. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the modal box body. */
  className: z.string().optional().default('')
})

export type ModalBoxBodyProps = z.infer<typeof ModalBoxBodySchema>
