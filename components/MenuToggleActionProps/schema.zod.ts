// Auto-generated Zod schema for MenuToggleActionProps
import { z } from 'zod'

export const MenuToggleActionPropsSchema = z.object({
  /** Element to be rendered inside the <button> */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the MenuToggleAction */
  className: z.string().optional(),
  /** Id of the action button */
  id: z.string().optional(),
  /** Flag to show if the action button is disabled */
  isDisabled: z.boolean().optional(),
  /** A callback for when the action button is clicked */
  onClick: z.custom<Event>().optional()
})

export type MenuToggleActionPropsProps = z.infer<typeof MenuToggleActionPropsSchema>
