// Auto-generated Zod schema for ModalFooterProps
import { z } from 'zod'

export const ModalFooterPropsSchema = z.object({
  /** Content rendered inside the modal footer. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal footer. */
  className: z.string().optional()
})

export type ModalFooterPropsProps = z.infer<typeof ModalFooterPropsSchema>
