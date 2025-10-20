// Auto-generated Zod schema for TreeViewListItemBase
import { z } from 'zod'

export const TreeViewListItemBaseSchema = z.object({
  /** Action of a tree view item, which can be either a button or dropdown component. */
  action: z.custom<React.ReactNode>().optional(),
  /** Active items of tree view. */
  activeItems: z.array(z.unknown()).optional().default('[]'),
  /** Additional properties of the tree view item badge. */
  badgeProps: z.unknown().optional().default('{ isRead: true }'),
  /** Additional properties of the tree view item checkbox. */
  checkProps: z.unknown().optional().default('{
  checked: false
}'),
  /** Child nodes of a tree view item. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Callback for item comparison function. */
  compareItems: z.custom<(item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean>().optional(),
  /** Optional prop for a custom badge. */
  customBadgeContent: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if node is expanded by default. */
  defaultExpanded: z.boolean().optional().default(false),
  /** Expanded icon of a tree view item. */
  expandedIcon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if a tree view item has a badge. */
  hasBadge: z.boolean().optional().default(false),
  /** Flag indicating if a tree view item has a checkbox. */
  hasCheckbox: z.boolean().optional().default(false),
  /** Default icon of a tree view item. */
  icon: z.custom<React.ReactNode>().optional(),
  /** ID of a tree view item. */
  id: z.string().optional(),
  /** Flag indicating if the tree view is using a compact variation. */
  isCompact: z.boolean().optional(),
  /** Flag indicating if the node is expanded, overrides internal state. */
  isExpanded: z.boolean().optional(),
  /** Flag indicating that tree nodes should be independently selectable, even when having
children. */
  isSelectable: z.boolean().optional().default(false),
  /** Data structure of tree view item. */
  itemData: z.unknown().optional(),
  /** Internal content of a tree view item. */
  name: z.custom<React.ReactNode>(),
  /** Callback for item checkbox selection. */
  onCheck: z.custom<Event>().optional(),
  /** Callback for collapsing a node with children. */
  onCollapse: z.custom<Event>().optional(),
  /** Callback for expanding a node with children. */
  onExpand: z.custom<Event>().optional(),
  /** Callback for item selection. Note: calling event.preventDefault() will prevent the node
from toggling. */
  onSelect: z.custom<Event>().optional(),
  /** Parent item of tree view item. */
  parentItem: z.unknown().optional(),
  /** Title of a tree view item. */
  title: z.custom<React.ReactNode>(),
  /** Flag indicating the tree view should utilize memoization to help render large data sets.
Setting this property requires that the activeItems property is passed an array containing
every node in the selected item's path. */
  useMemo: z.boolean().optional()
})

export type TreeViewListItemBaseProps = z.infer<typeof TreeViewListItemBaseSchema>
