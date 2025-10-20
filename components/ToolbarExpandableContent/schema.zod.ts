// Auto-generated Zod schema for ToolbarExpandableContent
import { z } from 'zod'

export const ToolbarExpandableContentSchema = z.object({
  /** Classes added to the root element of the data toolbar expandable content */
  className: z.string().optional(),
  /** optional callback for clearing all filters in the toolbar */
  clearAllFilters: z.custom<() => void>().optional(),
  /** Text to display in the clear all filters button */
  clearFiltersButtonText: z.string().optional().default('Clear all filters'),
  /** Expandable content reference for passing to data toolbar children */
  expandableContentRef: z.any().optional(),
  /** Flag indicating the expandable content is expanded */
  isExpanded: z.boolean().optional().default(false),
  /** Label container reference for passing to data toolbar children */
  labelContainerRef: z.unknown().optional(),
  /** Flag indicating that the clear all filters button should be visible */
  showClearFiltersButton: z.boolean()
})

export type ToolbarExpandableContentProps = z.infer<typeof ToolbarExpandableContentSchema>
