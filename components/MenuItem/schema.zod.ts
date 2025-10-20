// Auto-generated Zod schema for MenuItem
import { z } from 'zod'

export const MenuItemSchema = z.object({
  /** Render item with one or more actions */
  actions: z.custom<React.ReactNode>().optional(),
  /** Adds an accessible name to the menu item. */
  'aria-label': z.string().optional(),
  /** Content rendered inside the menu list item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the menu list item */
  className: z.string().optional(),
  /** Component used to render the menu item */
  component: z.any().optional(),
  /** Description of the menu item */
  description: z.custom<React.ReactNode>().optional(),
  /** Sub menu direction */
  direction: z.enum(['down', 'up']).optional(),
  /** Navigation link download. Only set when the to property is present. */
  download: z.string().optional(),
  /** Drilldown menu of the item. Should be a Menu or DrilldownMenu type. */
  drilldownMenu: z.any().optional(),
  /** Flyout menu. Should not be used if the to prop is defined. */
  flyoutMenu: z.custom<React.ReactElement>().optional(),
  /** Flag indicating the item has a checkbox */
  hasCheckbox: z.boolean().optional(),
  /** Render item with icon */
  icon: z.custom<React.ReactNode>().optional(),
  /** Sets the id attribute on the menu item component. */
  id: z.string().optional(),
  /** Flag indicating whether the item is active */
  isActive: z.boolean().optional(),
  /** Render item as aria-disabled option */
  isAriaDisabled: z.boolean().optional(),
  /** Flag indicating the item is in danger state */
  isDanger: z.boolean().optional(),
  /** Render item as disabled option */
  isDisabled: z.boolean().optional(),
  /** Render an external link icon on focus or hover, and set the link's
"target" attribute to a value of "_blank". */
  isExternalLink: z.boolean().optional(),
  /** Flag indicating if the item is favorited */
  isFavorited: z.boolean().optional(),
  /** Flag indicating the item is focused */
  isFocused: z.boolean().optional(),
  /** Flag indicating if the item causes a load */
  isLoadButton: z.boolean().optional(),
  /** Flag indicating a loading state */
  isLoading: z.boolean().optional(),
  /** True if item is on current selection path */
  isOnPath: z.boolean().optional(),
  /** Flag indicating if the option is selected */
  isSelected: z.boolean().optional(),
  /** Identifies the component in the Menu onSelect or onActionClick callback */
  itemId: z.unknown().optional(),
  /** Callback for item click */
  onClick: z.custom<(event?: any) => void>().optional(),
  /** Callback function when mouse leaves trigger */
  onShowFlyout: z.custom<(event?: any) => void>().optional(),
  /** Navigation link relationship. Only set when the to property is present. */
  rel: z.string().optional(),
  /** Navigation link target. Only set when the to property is present. If isExternalLink is also passed in, this property will be set to "_blank". */
  target: z.string().optional(),
  /** Target navigation link. Should not be used if the flyout prop is defined. */
  to: z.string().optional(),
  /** Props for adding a tooltip to a menu item */
  tooltipProps: z.unknown().optional()
})

export type MenuItemProps = z.infer<typeof MenuItemSchema>
