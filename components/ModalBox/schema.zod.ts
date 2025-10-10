// Auto-generated Zod schema for ModalBox
// Generated on: 2025-10-10T18:12:17.780Z
import { z } from 'zod'

export const ModalBoxSchema = z.object({
  /** Id to use for the modal box description. This should match the ModalHeader labelId or descriptorId */
  'aria-describedby': z.string().optional(),
  /** Adds an accessible name to the modal when there is no title in the ModalHeader. */
  'aria-label': z.string().optional(),
  /** Id to use for the modal box label. */
  'aria-labelledby': z.string().optional(),
  /** Content rendered inside the modal box. */
  children: z.any(),
  /** Additional classes added to the modal box. */
  className: z.string().optional(),
  /** Position of the modal. By default a modal will be positioned vertically and horizontally centered. */
  position: z.enum(['default', 'top']).optional(),
  /** Offset from alternate position. Can be any valid CSS length/percentage. */
  positionOffset: z.string().optional(),
  /** Variant of the modal. */
  variant: z.enum(['small', 'medium', 'large', 'default']).optional().default('default')
})

export type ModalBoxProps = z.infer<typeof ModalBoxSchema>
