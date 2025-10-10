// Auto-generated Zod schema for ModalBoxDescription-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxDescriptionSchema = z.object({
  /** Content rendered inside the description. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the description. */
  className: z.string().optional().default(''),
  /** Id of the description. */
  id: z.string().optional().default('')
})

export type ModalBoxDescriptionProps = z.infer<typeof ModalBoxDescriptionSchema>
