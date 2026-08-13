// Auto-generated Zod schema for ModalBoxBody-deprecated
import { z } from 'zod'

export const ModalBoxBodySchema = z.object({
  /** Content rendered inside the modal box body. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the modal box body. */
  className: z.string().optional().default('')
})

export type ModalBoxBodyProps = z.infer<typeof ModalBoxBodySchema>
