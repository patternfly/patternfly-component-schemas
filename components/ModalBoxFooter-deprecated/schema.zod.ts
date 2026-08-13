// Auto-generated Zod schema for ModalBoxFooter-deprecated
import { z } from 'zod'

export const ModalBoxFooterSchema = z.object({
  /** Content rendered inside the modal box footer. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the modal box footer. */
  className: z.string().optional().default('')
})

export type ModalBoxFooterProps = z.infer<typeof ModalBoxFooterSchema>
