// Auto-generated Zod schema for CardHeader
import { z } from 'zod'

export const CardHeaderSchema = z.object({
  /** Actions of the card header */
  actions: z.unknown().optional(),
  /** Content rendered inside the card header */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the card header */
  className: z.string().optional(),
  /** Flag indicating that header wrapping is enabled */
  hasWrap: z.boolean().optional(),
  /** ID of the card header. */
  id: z.string().optional(),
  /** Whether to right-align expandable toggle button */
  isToggleRightAligned: z.boolean().optional(),
  /** Callback expandable card */
  onExpand: z.custom<Event>().optional(),
  /** Selectable actions of the card header */
  selectableActions: z.unknown().optional(),
  /** Additional props for expandable toggle button */
  toggleButtonProps: z.unknown().optional()
})

export type CardHeaderProps = z.infer<typeof CardHeaderSchema>
