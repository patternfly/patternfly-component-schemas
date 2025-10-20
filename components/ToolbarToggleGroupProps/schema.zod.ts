// Auto-generated Zod schema for ToolbarToggleGroupProps
import { z } from 'zod'

export const ToolbarToggleGroupPropsSchema = z.object({
  /** Controls when filters are shown and when the toggle button is hidden. */
  breakpoint: z.enum(['md', 'lg', 'xl', '2xl']),
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
  /** Reference to a label container group for filters inside the toolbar toggle group */
  labelContainerRef: z.unknown().optional(),
  /** Callback for toggle group click event for non-managed toolbar toggle groups. */
  onToggle: z.custom<Event>().optional(),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.record(z.unknown()).optional(),
  /** Flag indicating that the clear all filters button should be visible in the toolbar toggle group */
  showClearFiltersButton: z.boolean().optional(),
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: z.custom<React.ReactNode>(),
  /** Visibility at various breakpoints. */
  visibility: z.record(z.unknown()).optional()
})

export type ToolbarToggleGroupPropsProps = z.infer<typeof ToolbarToggleGroupPropsSchema>
