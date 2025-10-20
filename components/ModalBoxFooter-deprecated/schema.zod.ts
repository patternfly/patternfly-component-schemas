// Auto-generated Zod schema for ModalBoxFooter-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxFooterSchema = z.object({
  /** Content rendered inside the modal box footer. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the modal box footer. */
  className: z.string().optional().default('')
})

export type ModalBoxFooterProps = z.infer<typeof ModalBoxFooterSchema>
