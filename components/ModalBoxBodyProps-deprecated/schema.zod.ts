// Auto-generated Zod schema for ModalBoxBodyProps-deprecated
import { z } from 'zod'

export const ModalBoxBodyPropsSchema = z.object({
  /** Content rendered inside the modal box body. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal box body. */
  className: z.string().optional()
})

export type ModalBoxBodyPropsProps = z.infer<typeof ModalBoxBodyPropsSchema>
