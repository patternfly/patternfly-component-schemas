// Auto-generated Zod schema for TreeViewDataItem
// Generated on: 2025-10-10T18:12:17.764Z
import { z } from 'zod'

export const TreeViewDataItemSchema = z.object({
  /** Action of a tree view item, which can be either a button or dropdown component. */
  action: z.any().optional(),
  /** Additional properties of the tree view item badge. */
  badgeProps: z.any().optional(),
  /** Additional properties of the tree view item checkbox. */
  checkProps: z.any().optional(),
  /** Child nodes of a tree view item. */
  children: z.array(z.any()).optional(),
  /** Optional prop for a custom badge. */
  customBadgeContent: z.any().optional(),
  /** Flag indicating if node is expanded by default. */
  defaultExpanded: z.boolean().optional(),
  /** Expanded icon of a tree view item. */
  expandedIcon: z.any().optional(),
  /** Flag indicating if a tree view item has a badge. */
  hasBadge: z.boolean().optional(),
  /** Flag indicating if a tree view item has a checkbox. */
  hasCheckbox: z.boolean().optional(),
  /** Default icon of a tree view item. */
  icon: z.any().optional(),
  /** ID of a tree view item. */
  id: z.string().optional(),
  /** Internal content of a tree view item. */
  name: z.any(),
  /** Title of a tree view item. Only used in compact presentations. */
  title: z.any().optional()
})

export type TreeViewDataItemProps = z.infer<typeof TreeViewDataItemSchema>
