// Auto-generated Zod schema for MenuItemAction
import { z } from 'zod'

export const MenuItemActionSchema = z.object({
  /** Identifies the action item in the onActionClick on the Menu */
  actionId: z.unknown().optional(),
  /** Accessibility label */
  'aria-label': z.string(),
  /** Additional classes added to the action button */
  className: z.string().optional(),
  /** The action icon to use */
  icon: z.enum(['favorites']).optional(),
  /** Disables action, can also be specified on the MenuItem instead */
  isDisabled: z.boolean().optional(),
  /** Flag indicating if the item is favorited */
  isFavorited: z.boolean().optional(),
  /** Callback on action click, can also specify onActionClick on the Menu instead */
  onClick: z.custom<(event?: any) => void>().optional()
})

export type MenuItemActionProps = z.infer<typeof MenuItemActionSchema>
