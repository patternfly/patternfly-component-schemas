// Auto-generated Zod schema for ToolbarFilter
import { z } from 'zod'

export const ToolbarFilterSchema = z.object({
  /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
  align: z.record(z.unknown()).optional(),
  /** Vertical alignment of children */
  alignItems: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Vertical alignment */
  alignSelf: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Unique category name to be used as a label for the label group */
  categoryName: z.any(),
  /** Content to be rendered inside the data toolbar item */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of the data toolbar item */
  className: z.string().optional(),
  /** Sets only the column gap at various breakpoints. */
  columnGap: z.record(z.unknown()).optional(),
  /** Callback passed by consumer used to delete a label from the labels[] */
  deleteLabel: z.any().optional(),
  /** Callback passed by consumer used to close the entire label group */
  deleteLabelGroup: z.any().optional(),
  /** Reference to a label container created with a custom expandable content group, for non-managed multiple toolbar toggle groups. */
  expandableLabelContainerRef: z.any().optional(),
  /** Sets both the column and row gap at various breakpoints. */
  gap: z.record(z.unknown()).optional(),
  /** id for this data toolbar item */
  id: z.string().optional(),
  /** Flag indicating if the expand-all variant is expanded or not */
  isAllExpanded: z.boolean().optional(),
  /** Flag indicating when toolbar toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded: z.boolean().optional(),
  /** Flag that modifies the toolbar item to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer: z.boolean().optional(),
  /** Customizable template string for the label group. Use variable "${remaining}" for the overflow label count. */
  labelGroupCollapsedText: z.string().optional(),
  /** Customizable "Show Less" text string for the label group */
  labelGroupExpandedText: z.string().optional(),
  /** An array of strings to be displayed as labels in the expandable content */
  labels: z.any().optional().default('[]'),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.record(z.unknown()).optional(),
  /** Value to set for row wrapping at various breakpoints */
  rowWrap: z.record(z.unknown()).optional(),
  /** Flag to show the toolbar item */
  showToolbarItem: z.boolean().optional().default(true),
  /** A type modifier which modifies spacing specifically depending on the type of item */
  variant: z.enum(['pagination', 'label', 'label-group', 'separator', 'expand-all']).optional(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarFilterProps = z.infer<typeof ToolbarFilterSchema>
