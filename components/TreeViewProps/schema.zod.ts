// Auto-generated Zod schema for TreeViewProps
import { z } from 'zod'

export const TreeViewPropsSchema = z.object({
  /** Active items of tree view. */
  activeItems: z.array(z.unknown()).optional(),
  /** Sets the expanded state on all tree nodes, overriding default behavior and current
internal state. */
  allExpanded: z.boolean().optional(),
  /** Class to add if not passed a parentItem property. */
  className: z.string().optional(),
  /** Comparison function for determining active items. */
  compareItems: z.custom<(item: TreeViewDataItem, itemToCheck: TreeViewDataItem) => boolean>().optional(),
  /** Data of the tree view. */
  data: z.array(z.unknown()),
  /** Sets the default expanded behavior. */
  defaultAllExpanded: z.boolean().optional(),
  /** Icon for all expanded node items. */
  expandedIcon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if all nodes in the tree view should have badges. */
  hasBadges: z.boolean().optional(),
  /** Flag indicating if all nodes in the tree view should have checkboxes. */
  hasCheckboxes: z.boolean().optional(),
  /** Flag indicating if the tree view has guide lines. */
  hasGuides: z.boolean().optional(),
  /** Flag indicating that tree nodes should be independently selectable, even when having
children. */
  hasSelectableNodes: z.boolean().optional(),
  /** Icon for all leaf or unexpanded node items. */
  icon: z.custom<React.ReactNode>().optional(),
  /** ID of the tree view. */
  id: z.string().optional(),
  /** Flag indicating whether multiple nodes can be selected in the tree view. This will also set the
aria-multiselectable attribute on the tree view list which is required to be true when multiple selection is intended.
Can only be applied to the root tree view list. */
  isMultiSelectable: z.boolean().optional(),
  /** Flag indicating if the tree view is nested. */
  isNested: z.boolean().optional(),
  /** Callback for item checkbox selection. */
  onCheck: z.custom<Event>().optional(),
  /** Callback for collapsing a node with children. */
  onCollapse: z.custom<Event>().optional(),
  /** Callback for expanding a node with children. */
  onExpand: z.custom<Event>().optional(),
  /** Callback for item selection. */
  onSelect: z.custom<Event>().optional(),
  /** Internal. Parent item of a tree view list item. */
  parentItem: z.unknown().optional(),
  /** Toolbar to display above the tree view. */
  toolbar: z.custom<React.ReactNode>().optional(),
  /** A space separated list of element id's that sets the accessible name of the tree view list. Either
this or the aria-label property must be passed in. */
  'Unknown': z.string().optional(),
  /** Flag indicating the tree view should utilize memoization to help render large data sets.
Setting this property requires that the activeItems property is passed an array containing
every node in the selected item's path. */
  useMemo: z.boolean().optional(),
  /** Variant presentation styles for the tree view. */
  variant: z.enum(['default', 'compact', 'compactNoBackground']).optional()
})

export type TreeViewPropsProps = z.infer<typeof TreeViewPropsSchema>
