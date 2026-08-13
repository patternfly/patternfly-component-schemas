// Auto-generated Zod schema for ToolbarLabelGroupContentProps
import { z } from 'zod'

export const ToolbarLabelGroupContentPropsSchema = z.object({
  /** Classes applied to root element of the data toolbar content row */
  className: z.string().optional(),
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters: z.custom<() => void>().optional(),
  /** Text to display in the clear all filters button */
  clearFiltersButtonText: z.string().optional(),
  /** The breakpoint at which the listed filters in label groups are collapsed down to a summary */
  collapseListedFiltersBreakpoint: z.enum(['all', 'md', 'lg', 'xl', '2xl']).optional(),
  /** Custom additional content appended to the generated labels. To maintain spacing and styling, each node should be a ToolbarItem or ToolbarGroup. This property will remove the built in "Clear all filters" button. */
  customLabelGroupContent: z.custom<React.ReactNode>().optional(),
  /** Flag indicating if a data toolbar toggle group's expandable content is expanded */
  isExpanded: z.boolean().optional(),
  /** Label group content reference for passing to data toolbar children */
  labelGroupContentRef: z.unknown().optional(),
  /** Total number of filters currently being applied across all ToolbarFilter components */
  numberOfFilters: z.number(),
  /** Text to display in the total number of applied filters ToolbarFilter */
  numberOfFiltersText: z.custom<(numberOfFilters: number) => string>().optional(),
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton: z.boolean()
})

export type ToolbarLabelGroupContentPropsProps = z.infer<typeof ToolbarLabelGroupContentPropsSchema>
