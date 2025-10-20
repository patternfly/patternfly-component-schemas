// Auto-generated Zod schema for Menu
import { z } from 'zod'

export const MenuSchema = z.object({
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
  /** ID of the menu */
  id: z.string().optional(),
  /** Indicates if a menu is drilled into */
  isMenuDrilledIn: z.boolean().optional(),
  /** Indicating that the menu should have nav flyout styling */
  isNavFlyout: z.boolean().optional(),
  /** Indicates if the menu should be without the outer box-shadow */
  isPlain: z.boolean().optional(),
  /** Internal flag indicating if the Menu is the root of a menu tree */
  isRootMenu: z.boolean().optional(),
  /** Indicates if the menu should be srollable */
  isScrollable: z.boolean().optional(),
  /** Callback called when an MenuItems's action button is clicked. You can also specify it within a MenuItemAction. */
  onActionClick: z.custom<(event?: any, itemId?: any, actionId?: any) => void>().optional(),
  /** Callback for drilling into a submenu */
  onDrillIn: z.any().optional(),
  /** Callback for drilling out of a submenu */
  onDrillOut: z.any().optional(),
  /** Callback for collecting menu heights */
  onGetMenuHeight: z.custom<(menuId: string, height: number) => void>().optional(),
  /** Callback for updating when item selection changes. You can also specify onClick on the MenuItem. */
  onSelect: z.any().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** ID of parent menu for drilldown menus */
  parentMenu: z.string().optional(),
  /** Determines the accessible role of the menu. For a non-checkbox menu that can have
one or more items selected, pass in "listbox". */
  role: z.string().optional(),
  /** Single itemId for single select menus, or array of itemIds for multi select. You can also specify isSelected on the MenuItem. */
  selected: z.any().optional()
})

export type MenuProps = z.infer<typeof MenuSchema>
