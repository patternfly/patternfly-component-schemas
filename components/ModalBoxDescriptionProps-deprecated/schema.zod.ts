// Auto-generated Zod schema for ModalBoxDescriptionProps-deprecated
// Generated on: 2025-10-10T18:12:17.795Z
import { z } from 'zod'

export const ModalBoxDescriptionPropsSchema = z.object({
  /** Content rendered inside the description. */
  children: z.any().optional(),
  /** Additional classes added to the description. */
  className: z.string().optional(),
  /** Id of the description. */
  id: z.string().optional()
})

export type ModalBoxDescriptionPropsProps = z.infer<typeof ModalBoxDescriptionPropsSchema>
