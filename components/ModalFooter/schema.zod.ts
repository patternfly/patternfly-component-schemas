// Auto-generated Zod schema for ModalFooter
// Generated on: 2025-10-10T18:12:17.780Z
import { z } from 'zod'

export const ModalFooterSchema = z.object({
  /** Content rendered inside the modal footer. */
  children: z.any().optional(),
  /** Additional classes added to the modal footer. */
  className: z.string().optional()
})

export type ModalFooterProps = z.infer<typeof ModalFooterSchema>
