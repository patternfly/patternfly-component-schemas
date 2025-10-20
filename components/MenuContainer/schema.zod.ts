// Auto-generated Zod schema for MenuContainer
import { z } from 'zod'

export const MenuContainerSchema = z.object({
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional().default(0),
  /** Flag to indicate if menu is opened. */
  isOpen: z.boolean(),
  /** Menu to be rendered */
  menu: z.any(),
  /** Reference to the menu */
  menuRef: z.unknown(),
  /** Callback to change the open state of the menu.
Triggered by clicking outside of the menu, or by pressing any keys specified in onOpenChangeKeys. */
  onOpenChange: z.custom<(isOpen: boolean) => void>().optional(),
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys: z.array(z.string()).optional().default('['Escape', 'Tab']'),
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown: z.custom<Event>().optional(),
  /** Additional properties to pass to the Popper */
  popperProps: z.unknown().optional(),
  /** Flag indicating the first menu item should be focused after opening the dropdown. */
  shouldFocusFirstItemOnOpen: z.boolean().optional().default(false),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional().default(true),
  /** Toggle to be rendered */
  toggle: z.custom<React.ReactNode>(),
  /** Reference to the toggle */
  toggleRef: z.unknown(),
  /** z-index of the dropdown menu */
  zIndex: z.number().optional().default(9999)
})

export type MenuContainerProps = z.infer<typeof MenuContainerSchema>
