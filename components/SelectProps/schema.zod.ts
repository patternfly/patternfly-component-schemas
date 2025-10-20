// Auto-generated Zod schema for SelectProps
import { z } from 'zod'

export const SelectPropsSchema = z.object({
  /** Anything which can be rendered in a select */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of select */
  className: z.string().optional(),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional(),
  innerRef: z.unknown().optional(),
  /** Flag to indicate if select is open */
  isOpen: z.boolean().optional(),
  /** Indicates if the select should be without the outer box-shadow */
  isPlain: z.boolean().optional(),
  /** Indicates if the select menu should be scrollable */
  isScrollable: z.boolean().optional(),
  /** Maximum height of select menu */
  maxMenuHeight: z.string().optional(),
  /** Height of the select menu */
  menuHeight: z.string().optional(),
  /** Callback to allow the select component to change the open state of the menu.
Triggered by clicking outside of the menu, or by pressing any keys specified in onOpenChangeKeys. */
  onOpenChange: z.custom<(isOpen: boolean) => void>().optional(),
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys: z.array(z.string()).optional(),
  /** Function callback when user selects an option. */
  onSelect: z.any().optional(),
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown: z.custom<Event>().optional(),
  /** Additional properties to pass to the popper */
  popperProps: z.unknown().optional(),
  /** Determines the accessible role of the select. For a checkbox select pass in "menu". */
  role: z.string().optional(),
  /** Single select option value for single select menus, or array of select option values for multi select. You can also specify isSelected on the SelectOption. */
  selected: z.any().optional(),
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

export type SelectPropsProps = z.infer<typeof SelectPropsSchema>
