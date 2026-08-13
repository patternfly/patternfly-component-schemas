// Auto-generated Zod schema for ModalBoxDescription
import { z } from 'zod'

export const ModalBoxDescriptionSchema = z.object({
  /** Content rendered inside the description. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the description. */
  className: z.string().optional().default(''),
  /** Id of the description. */
  id: z.string().optional().default('')
})

export type ModalBoxDescriptionProps = z.infer<typeof ModalBoxDescriptionSchema>
