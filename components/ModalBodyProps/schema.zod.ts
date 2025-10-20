// Auto-generated Zod schema for ModalBodyProps
import { z } from 'zod'

export const ModalBodyPropsSchema = z.object({
  /** Content rendered inside the modal body. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the modal body. */
  className: z.string().optional(),
  /** Accessible role applied to the modal body. This will default to "region" if the
aria-label property is passed in. Set to a more appropriate role as applicable
based on the modal content and context. */
  role: z.string().optional(),
  /** Accessible label applied to the modal body. This should be used to communicate
important information about the modal body div element if needed, such as when it is scrollable. */
  'Unknown': z.string().optional()
})

export type ModalBodyPropsProps = z.infer<typeof ModalBodyPropsSchema>
