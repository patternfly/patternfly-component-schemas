// Auto-generated Zod schema for Select
import { z } from 'zod'

export const SelectSchema = z.object({
  /** itemId of the currently active item. You can also specify isActive on the MenuItem. */
  activeItemId: z.any().optional(),
  /** ID of the currently active menu for the drilldown variant */
  activeMenu: z.string().optional(),
  /** Anything that can be rendered inside of the Menu */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Menu */
  className: z.string().optional(),
  /** Indicates if menu contains a drilldown menu */
  containsDrilldown: z.boolean().optional(),
  /** Indicates if menu contains a flyout menu */
  containsFlyout: z.boolean().optional(),
  /** Indicates the path of drilled in menu itemIds */
  drilldownItemPath: z.array(z.string()).optional(),
  /** Array of menus that are drilled in */
  drilledInMenus: z.array(z.string()).optional(),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional(),
  /** ID of the menu */
  id: z.string().optional(),
  /** Indicates if a menu is drilled into */
  isMenuDrilledIn: z.boolean().optional(),
  /** Indicating that the menu should have nav flyout styling */
  isNavFlyout: z.boolean().optional(),
  /** Flag to indicate if select is open */
  isOpen: z.boolean().optional(),
  /** Indicates if the menu should be without the outer box-shadow */
  isPlain: z.boolean().optional(),
  /** Internal flag indicating if the Menu is the root of a menu tree */
  isRootMenu: z.boolean().optional(),
  /** Indicates if the menu should be srollable */
  isScrollable: z.boolean().optional(),
  /** Maximum height of select menu */
  maxMenuHeight: z.string().optional(),
  /** Height of the select menu */
  menuHeight: z.string().optional(),
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick: z.custom<(event?: any, itemId?: any, actionId?: any) => void>().optional(),
  /** Callback for drilling into a submenu */
  onDrillIn: z.any().optional(),
  /** Callback for drilling out of a submenu */
  onDrillOut: z.any().optional(),
  /** Callback for collecting menu heights */
  onGetMenuHeight: z.custom<(menuId: string, height: number) => void>().optional(),
  /** Callback to allow the select component to change the open state of the menu.
Triggered by clicking outside of the menu, or by pressing any keys specified in onOpenChangeKeys. */
  onOpenChange: z.custom<(isOpen: boolean) => void>().optional(),
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys: z.array(z.string()).optional(),
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect: z.any().optional(),
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** ID of parent menu for drilldown menus */
  parentMenu: z.string().optional(),
  /** Additional properties to pass to the popper */
  popperProps: z.unknown().optional(),
  /** Determines the accessible role of the menu. For a non-checkbox menu that can have
one or more items selected, pass in "listbox". */
  role: z.string().optional(),
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected: z.any().optional(),
  /** Flag indicating the first menu item should be focused after opening the menu. */
  shouldFocusFirstItemOnOpen: z.boolean().optional(),
  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  shouldFocusToggleOnSelect: z.boolean().optional(),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional(),
  /** Select toggle. The toggle should either be a renderer function which forwards the given toggle ref, or a direct ReactNode that should be passed along with the toggleRef property. */
  toggle: z.any(),
  /** Select variant. For typeahead variant focus won't shift to menu items when pressing up/down arrows. */
  variant: z.enum(['default', 'typeahead']).optional(),
  /** z-index of the select menu */
  zIndex: z.number().optional()
})

export type SelectProps = z.infer<typeof SelectSchema>
