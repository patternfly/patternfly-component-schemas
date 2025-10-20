// Auto-generated Zod schema for TabsProps
import { z } from 'zod'

export const TabsPropsSchema = z.object({
  /** The index of the active tab */
  activeKey: z.any().optional(),
  /** Aria-label for the add button */
  addButtonAriaLabel: z.string().optional(),
  /** Aria-label for the back scroll button */
  backScrollAriaLabel: z.string().optional(),
  /** Content rendered inside the tabs component. Only `Tab` components or expressions resulting in a falsy value are allowed here. */
  children: z.any(),
  /** Additional classes added to the tabs */
  className: z.string().optional(),
  /** Determines what tag is used around the tabs. Use "nav" to define the tabs inside a navigation region */
  component: z.enum(['div', 'nav']).optional(),
  /** The index of the default active tab. Set this for uncontrolled Tabs */
  defaultActiveKey: z.any().optional(),
  /** Flag indicating the default expanded state for uncontrolled expand/collapse of */
  defaultIsExpanded: z.boolean().optional(),
  /** Enable expandable vertical tabs at various breakpoints. (isVertical should be set to true for this to work) */
  expandable: z.record(z.unknown()).optional(),
  /** Aria-label for the forward scroll button */
  forwardScrollAriaLabel: z.string().optional(),
  /** Disables border bottom tab styling on tabs. Defaults to false. To remove the bottom border, set this prop to true. */
  hasNoBorderBottom: z.boolean().optional(),
  /** Uniquely identifies the tabs */
  id: z.string().optional(),
  /** Insets at various breakpoints. */
  inset: z.record(z.unknown()).optional(),
  /** Enables box styling to the tab component */
  isBox: z.boolean().optional(),
  /** Flag to indicate if the vertical tabs are expanded */
  isExpanded: z.boolean().optional(),
  /** Enables the filled tab list layout */
  isFilled: z.boolean().optional(),
  /** Flag which places overflowing tabs into a menu triggered by the last tab. Additionally an object can be passed with custom settings for the overflow tab. */
  isOverflowHorizontal: z.any().optional(),
  /** Enables subtab tab styling */
  isSubtab: z.boolean().optional(),
  /** Enables vertical tab styling */
  isVertical: z.boolean().optional(),
  leftScrollAriaLabel: z.string().optional(),
  /** Waits until the first "enter" transition to mount tab children (add them to the DOM) */
  mountOnEnter: z.boolean().optional(),
  /** Callback for the add button. Passing this property inserts the add button */
  onAdd: z.custom<Event>().optional(),
  /** Callback to handle tab closing and adds a basic close button to all tabs. This is overridden by the tab actions property. */
  onClose: z.any().optional(),
  /** Callback to handle tab selection */
  onSelect: z.any().optional(),
  /** Callback function to toggle the expandable tabs. */
  onToggle: z.custom<Event>().optional(),
  /** Value to overwrite the randomly generated data-ouia-component-id. */
  ouiaId: z.any().optional(),
  /** Set the value of data-ouia-safe. Only set to true when the component is in a static state, i.e. no animations are occurring. At all other times, this value must be false. */
  ouiaSafe: z.boolean().optional(),
  rightScrollAriaLabel: z.string().optional(),
  /** Aria-label for the expandable toggle */
  toggleAriaLabel: z.string().optional(),
  /** Text that appears in the expandable toggle */
  toggleText: z.string().optional(),
  /** Provides an accessible label for the tabs. Labels should be unique for each set of tabs that are present on a page. When component is set to nav, this prop should be defined to differentiate the tabs from other navigation regions on the page. */
  'Unknown': z.string().optional(),
  /** Unmounts tab children (removes them from the DOM) when they are no longer visible */
  unmountOnExit: z.boolean().optional(),
  /** Flag indicates that the tabs should use page insets. */
  usePageInsets: z.boolean().optional(),
  /** Tabs background color variant */
  variant: z.enum(['default', 'secondary']).optional()
})

export type TabsPropsProps = z.infer<typeof TabsPropsSchema>
