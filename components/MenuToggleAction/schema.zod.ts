// Auto-generated Zod schema for MenuToggleAction
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const MenuToggleActionSchema = z.object({
  /** Element to be rendered inside the <button> */
  children: z.any().optional(),
  /** Additional classes added to the MenuToggleAction */
  className: z.string().optional().default(''),
  /** Id of the action button */
  id: z.string().optional(),
  /** Flag to show if the action button is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** A callback for when the action button is clicked */
  onClick: z.any().optional().default('() => {}')
})

export type MenuToggleActionProps = z.infer<typeof MenuToggleActionSchema>
