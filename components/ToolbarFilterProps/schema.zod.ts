// Auto-generated Zod schema for ToolbarFilterProps
import { z } from 'zod'

export const ToolbarFilterPropsSchema = z.object({
  /** Unique category name to be used as a label for the label group */
  categoryName: z.any(),
  /** Content to be rendered inside the data toolbar item associated with the label group */
  children: z.custom<React.ReactNode>(),
  /** Callback passed by consumer used to delete a label from the labels[] */
  deleteLabel: z.any().optional(),
  /** Callback passed by consumer used to close the entire label group */
  deleteLabelGroup: z.any().optional(),
  /** Reference to a label container created with a custom expandable content group, for non-managed multiple toolbar toggle groups. */
  expandableLabelContainerRef: z.any().optional(),
  /** Flag indicating when toolbar toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded: z.boolean().optional(),
  /** Customizable template string for the label group. Use variable "${remaining}" for the overflow label count. */
  labelGroupCollapsedText: z.string().optional(),
  /** Customizable "Show Less" text string for the label group */
  labelGroupExpandedText: z.string().optional(),
  /** An array of strings to be displayed as labels in the expandable content */
  labels: z.any().optional(),
  /** Flag to show the toolbar item */
  showToolbarItem: z.boolean().optional()
})

export type ToolbarFilterPropsProps = z.infer<typeof ToolbarFilterPropsSchema>
