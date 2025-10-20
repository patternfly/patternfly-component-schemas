// Auto-generated Zod schema for TreeViewListProps
import { z } from 'zod'

export const TreeViewListPropsSchema = z.object({
  /** Child nodes of the current tree view. */
  children: z.custom<React.ReactNode>(),
  /** Flag indicating whether multiple nodes can be selected in the tree view. This will also set the
aria-multiselectable attribute on the tree view list which is required to be true when multiple selection is intended.
Can only be applied to the root tree view list. */
  isMultiSelectable: z.boolean().optional(),
  /** Flag indicating if the tree view is nested under another tree view. */
  isNested: z.boolean().optional(),
  /** Toolbar to display above the tree view. */
  toolbar: z.custom<React.ReactNode>().optional(),
  /** A space separated list of element id's that sets the accessible name of the tree view list. Either
this or the aria-label property must be passed in. */
  'Unknown': z.string().optional()
})

export type TreeViewListPropsProps = z.infer<typeof TreeViewListPropsSchema>
