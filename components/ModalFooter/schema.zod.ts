// Auto-generated Zod schema for ModalFooter
import { z } from 'zod'

export const ModalFooterSchema = z.object({
  /** Content rendered inside the modal footer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal footer. */
  className: z.string().optional()
})

export type ModalFooterProps = z.infer<typeof ModalFooterSchema>
