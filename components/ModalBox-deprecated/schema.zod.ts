// Auto-generated Zod schema for ModalBox-deprecated
// Generated on: 2025-10-10T18:12:17.796Z
import { z } from 'zod'

export const ModalBoxSchema = z.object({
  /** Id to use for the modal box description. */
  'aria-describedby': z.string(),
  /** Accessible descriptor of the modal. */
  'aria-label': z.string().optional().default(''),
  /** Id to use for the modal box label. */
  'aria-labelledby': z.string().optional(),
  /** Content rendered inside the modal box. */
  children: z.any(),
  /** Additional classes added to the modal box. */
  className: z.string().optional().default(''),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional(),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional().default('default')
})

export type ModalBoxProps = z.infer<typeof ModalBoxSchema>
