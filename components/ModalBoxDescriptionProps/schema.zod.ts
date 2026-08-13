// Auto-generated Zod schema for ModalBoxDescriptionProps
import { z } from 'zod'

export const ModalBoxDescriptionPropsSchema = z.object({
  /** Content rendered inside the description. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the description. */
  className: z.string().optional(),
  /** Id of the description. */
  id: z.string().optional()
})

export type ModalBoxDescriptionPropsProps = z.infer<typeof ModalBoxDescriptionPropsSchema>
