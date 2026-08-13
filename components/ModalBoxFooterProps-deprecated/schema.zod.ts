// Auto-generated Zod schema for ModalBoxFooterProps-deprecated
import { z } from 'zod'

export const ModalBoxFooterPropsSchema = z.object({
  /** Content rendered inside the modal box footer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal box footer. */
  className: z.string().optional()
})

export type ModalBoxFooterPropsProps = z.infer<typeof ModalBoxFooterPropsSchema>
