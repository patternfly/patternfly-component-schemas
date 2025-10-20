// Auto-generated Zod schema for TreeViewDataItem
import { z } from 'zod'

export const TreeViewDataItemSchema = z.object({
  /** Action of a tree view item, which can be either a button or dropdown component. */
  action: z.custom<React.ReactNode>().optional(),
  /** Additional properties of the tree view item badge. */
  badgeProps: z.unknown().optional(),
  /** Additional properties of the tree view item checkbox. */
  checkProps: z.unknown().optional(),
  /** Child nodes of a tree view item. */
  children: z.array(z.unknown()).optional(),
  /** Optional prop for a custom badge. */
  customBadgeContent: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if node is expanded by default. */
  defaultExpanded: z.boolean().optional(),
  /** Expanded icon of a tree view item. */
  expandedIcon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if a tree view item has a badge. */
  hasBadge: z.boolean().optional(),
  /** Flag indicating if a tree view item has a checkbox. */
  hasCheckbox: z.boolean().optional(),
  /** Default icon of a tree view item. */
  icon: z.custom<React.ReactNode>().optional(),
  /** ID of a tree view item. */
  id: z.string().optional(),
  /** Internal content of a tree view item. */
  name: z.custom<React.ReactNode>(),
  /** Title of a tree view item. Only used in compact presentations. */
  title: z.custom<React.ReactNode>().optional()
})

export type TreeViewDataItemProps = z.infer<typeof TreeViewDataItemSchema>
