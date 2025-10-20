// Auto-generated Zod schema for DropdownProps
import { z } from 'zod'

export const DropdownPropsSchema = z.object({
  /** Anything which can be rendered in a dropdown. */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of dropdown. */
  className: z.string().optional(),
  /** Time in ms to wait before firing the toggles' focus event. Defaults to 0 */
  focusTimeoutDelay: z.number().optional(),
  innerRef: z.unknown().optional(),
  /** Flag to indicate if menu is opened. */
  isOpen: z.boolean().optional(),
  /** Indicates if the menu should be without the outer box-shadow. */
  isPlain: z.boolean().optional(),
  /** Indicates if the menu should be scrollable. */
  isScrollable: z.boolean().optional(),
  /** Maximum height of dropdown menu */
  maxMenuHeight: z.string().optional(),
  /** Height of the dropdown menu */
  menuHeight: z.string().optional(),
  /** Callback to allow the dropdown component to change the open state of the menu.
Triggered by clicking outside of the menu, or by pressing any keys specified in onOpenChangeKeys. */
  onOpenChange: z.custom<(isOpen: boolean) => void>().optional(),
  /** Keys that trigger onOpenChange, defaults to tab and escape. It is highly recommended to include Escape in the array, while Tab may be omitted if the menu contains non-menu items that are focusable. */
  onOpenChangeKeys: z.array(z.string()).optional(),
  /** Function callback called when user selects item. */
  onSelect: z.any().optional(),
  /** Callback to override the toggle keydown behavior. By default, when the toggle has focus and the menu is open, pressing the up/down arrow keys will focus a valid non-disabled menu item - the first item for the down arrow key and last item for the up arrow key. */
  onToggleKeydown: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  /** Additional properties to pass to the Popper */
  popperProps: z.unknown().optional(),
  shouldFocusFirstItemOnOpen: z.boolean().optional(),
  /** Flag indicating the toggle should be focused after a selection. If this use case is too restrictive, the optional toggleRef property with a node toggle may be used to control focus. */
  shouldFocusToggleOnSelect: z.boolean().optional(),
  /** Flag indicating if scroll on focus of the first menu item should occur. */
  shouldPreventScrollOnItemFocus: z.boolean().optional(),
  /** Dropdown toggle. The toggle should either be a renderer function which forwards the given toggle ref, or a direct ReactNode that should be passed along with the toggleRef property. */
  toggle: z.any(),
  /** z-index of the dropdown menu */
  zIndex: z.number().optional()
})

export type DropdownPropsProps = z.infer<typeof DropdownPropsSchema>
