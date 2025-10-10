// Auto-generated Zod schema for TreeViewListItemBase
// Generated on: 2025-10-10T18:12:17.764Z
import { z } from 'zod'

export const TreeViewListItemBaseSchema = z.object({
  /** Action of a tree view item, which can be either a button or dropdown component. */
  action: z.any().optional(),
  /** Active items of tree view. */
  activeItems: z.array(z.any()).optional().default('[]'),
  /** Additional properties of the tree view item badge. */
  badgeProps: z.any().optional().default('{ isRead: true }'),
  /** Additional properties of the tree view item checkbox. */
  checkProps: z.any().optional().default('{
  checked: false
}'),
  /** Child nodes of a tree view item. */
  children: z.any().optional().default('null'),
  /** Callback for item comparison function. */
  compareItems: z.function().optional(),
  /** Optional prop for a custom badge. */
  customBadgeContent: z.any().optional(),
  /** Flag indicating if node is expanded by default. */
  defaultExpanded: z.boolean().optional().default(false),
  /** Expanded icon of a tree view item. */
  expandedIcon: z.any().optional(),
  /** Flag indicating if a tree view item has a badge. */
  hasBadge: z.boolean().optional().default(false),
  /** Flag indicating if a tree view item has a checkbox. */
  hasCheckbox: z.boolean().optional().default(false),
  /** Default icon of a tree view item. */
  icon: z.any().optional(),
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
  itemData: z.any().optional(),
  /** Internal content of a tree view item. */
  name: z.any(),
  /** Callback for item checkbox selection. */
  onCheck: z.any().optional(),
  /** Callback for collapsing a node with children. */
  onCollapse: z.any().optional(),
  /** Callback for expanding a node with children. */
  onExpand: z.any().optional(),
  /** Callback for item selection. Note: calling event.preventDefault() will prevent the node
from toggling. */
  onSelect: z.any().optional(),
  /** Parent item of tree view item. */
  parentItem: z.any().optional(),
  /** Title of a tree view item. */
  title: z.any(),
  /** Flag indicating the tree view should utilize memoization to help render large data sets.
Setting this property requires that the activeItems property is passed an array containing
every node in the selected item's path. */
  useMemo: z.boolean().optional()
})

export type TreeViewListItemBaseProps = z.infer<typeof TreeViewListItemBaseSchema>
