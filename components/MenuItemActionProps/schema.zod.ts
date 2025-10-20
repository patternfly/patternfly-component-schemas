// Auto-generated Zod schema for MenuItemActionProps
import { z } from 'zod'

export const MenuItemActionPropsSchema = z.object({
  /** Identifies the action item in the onActionClick on the Menu */
  actionId: z.unknown().optional(),
  /** Additional classes added to the action button */
  className: z.string().optional(),
  /** The action icon to use */
  icon: z.enum(['favorites']).optional(),
  innerRef: z.unknown().optional(),
  /** Disables action, can also be specified on the MenuItem instead */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if the item is favorited */
  isFavorited: z.boolean().optional(),
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  onClick: z.custom<(event?: any) => void>().optional(),
  /** Accessibility label */
  'Unknown': z.string()
})

export type MenuItemActionPropsProps = z.infer<typeof MenuItemActionPropsSchema>
