// Auto-generated Zod schema for ModalBoxProps-deprecated
// Generated on: 2025-10-10T18:12:17.796Z
import { z } from 'zod'

export const ModalBoxPropsSchema = z.object({
  /** Content rendered inside the modal box. */
  children: z.any(),
  /** Additional classes added to the modal box. */
  className: z.string().optional(),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional(),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Id to use for the modal box label. */
  'Unknown': z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional()
})

export type ModalBoxPropsProps = z.infer<typeof ModalBoxPropsSchema>
