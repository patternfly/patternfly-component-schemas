// Auto-generated Zod schema for CardHeader
// Generated on: 2025-10-10T18:12:17.791Z
import { z } from 'zod'

export const CardHeaderSchema = z.object({
  /** Actions of the card header */
  actions: z.any().optional(),
  /** Content rendered inside the card header */
  children: z.any().optional(),
  /** Additional classes added to the card header */
  className: z.string().optional(),
  /** Flag indicating that header wrapping is enabled */
  hasWrap: z.boolean().optional(),
  /** ID of the card header. */
  id: z.string().optional(),
  /** Whether to right-align expandable toggle button */
  isToggleRightAligned: z.boolean().optional(),
  /** Callback expandable card */
  onExpand: z.any().optional(),
  /** Selectable actions of the card header */
  selectableActions: z.any().optional(),
  /** Additional props for expandable toggle button */
  toggleButtonProps: z.any().optional()
})

export type CardHeaderProps = z.infer<typeof CardHeaderSchema>
