// Auto-generated Zod schema for ToolbarToggleGroup
import { z } from 'zod'

export const ToolbarToggleGroupSchema = z.object({
  /** Applies to a child of a flex layout, and aligns that child (and any adjacent children on the other side of it) to one side of the main axis */
  align: z.record(z.unknown()).optional(),
  /** Vertical alignment of children */
  alignItems: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Vertical alignment */
  alignSelf: z.enum(['start', 'center', 'baseline', 'default', 'end', 'stretch']).optional(),
  /** Controls when filters are shown and when the toggle button is hidden. */
  breakpoint: z.enum(['md', 'lg', 'xl', '2xl']),
  /** Content to be rendered inside the data toolbar group */
  children: z.custom<React.ReactNode>().optional(),
  /** Classes applied to root element of the data toolbar group */
  className: z.string().optional(),
  /** Optional callback for clearing all filters in the toolbar toggle group */
  clearAllFilters: z.custom<() => void>().optional(),
  /** Text to display in the clear all filters button of the toolbar toggle group */
  clearFiltersButtonText: z.string().optional(),
  /** Sets only the column gap at various breakpoints. */
  columnGap: z.record(z.unknown()).optional(),
  /** Sets both the column and row gap at various breakpoints. */
  gap: z.record(z.unknown()).optional(),
  /** Flag indicating when toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded: z.boolean().optional(),
  /** Flag that modifies the toolbar group to hide overflow and respond to available space. Used for horizontal navigation. */
  isOverflowContainer: z.boolean().optional(),
  /** Reference to a label container group for filters inside the toolbar toggle group */
  labelContainerRef: z.unknown().optional(),
  /** Callback for toggle group click event for non-managed toolbar toggle groups. */
  onToggle: z.custom<Event>().optional(),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.record(z.unknown()).optional(),
  /** Value to set for row wrapping at various breakpoints */
  rowWrap: z.record(z.unknown()).optional(),
  /** Flag indicating that the clear all filters button should be visible in the toolbar toggle group */
  showClearFiltersButton: z.boolean().optional(),
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: z.custom<React.ReactNode>(),
  /** A type modifier which modifies spacing specifically depending on the type of group */
  variant: z.enum(['filter-group', 'action-group', 'action-group-inline', 'action-group-plain', 'label-group']).optional(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarToggleGroupProps = z.infer<typeof ToolbarToggleGroupSchema>
