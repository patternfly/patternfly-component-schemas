// Auto-generated Zod schema for MenuToggleAction
// Generated on: 2025-10-16T18:45:33.859Z
import { z } from 'zod'

export const MenuToggleActionSchema = z.object({
  /** Element to be rendered inside the <button> */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the MenuToggleAction */
  className: z.string().optional().default(''),
  /** Id of the action button */
  id: z.string().optional(),
  /** Flag to show if the action button is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** A callback for when the action button is clicked */
  onClick: z.custom<Event>().optional().default('() => {}')
})

export type MenuToggleActionProps = z.infer<typeof MenuToggleActionSchema>
