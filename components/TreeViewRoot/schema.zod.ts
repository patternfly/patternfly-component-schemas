// Auto-generated Zod schema for TreeViewRoot
import { z } from 'zod'

export const TreeViewRootSchema = z.object({
  /** Child nodes of the tree view */
  children: z.custom<React.ReactNode>(),
  /** Class to add to add if not passed a parentItem */
  className: z.string().optional(),
  /** Flag indicating if the tree view has checkboxes. */
  hasCheckboxes: z.boolean().optional(),
  /** Flag indicating if tree view has guide lines. */
  hasGuides: z.boolean().optional(),
  /** Flag indicating that tree nodes should be independently selectable, even when having children */
  hasSelectableNodes: z.boolean().optional(),
  /** Variant presentation styles for the tree view. */
  variant: z.enum(['default', 'compact', 'compactNoBackground']).optional()
})

export type TreeViewRootProps = z.infer<typeof TreeViewRootSchema>
