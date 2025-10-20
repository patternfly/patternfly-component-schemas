// Auto-generated Zod schema for TreeViewList
import { z } from 'zod'

export const TreeViewListSchema = z.object({
  /** A text string that sets the accessible name of the tree view list. Either this or the aria-labelledby property must
be passed in. */
  'aria-label': z.string().optional(),
  /** A space separated list of element id's that sets the accessible name of the tree view list. Either
this or the aria-label property must be passed in. */
  'aria-labelledby': z.string().optional(),
  /** Child nodes of the current tree view. */
  children: z.custom<React.ReactNode>(),
  /** Flag indicating whether multiple nodes can be selected in the tree view. This will also set the
aria-multiselectable attribute on the tree view list which is required to be true when multiple selection is intended.
Can only be applied to the root tree view list. */
  isMultiSelectable: z.boolean().optional().default(false),
  /** Flag indicating if the tree view is nested under another tree view. */
  isNested: z.boolean().optional().default(false),
  /** Toolbar to display above the tree view. */
  toolbar: z.custom<React.ReactNode>().optional()
})

export type TreeViewListProps = z.infer<typeof TreeViewListSchema>
