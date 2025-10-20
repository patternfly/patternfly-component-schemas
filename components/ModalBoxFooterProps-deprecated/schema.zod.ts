// Auto-generated Zod schema for ModalBoxFooterProps-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxFooterPropsSchema = z.object({
  /** Content rendered inside the modal box footer. */
  children: z.any().optional(),
  /** Additional classes added to the modal box footer. */
  className: z.string().optional()
})

export type ModalBoxFooterPropsProps = z.infer<typeof ModalBoxFooterPropsSchema>
