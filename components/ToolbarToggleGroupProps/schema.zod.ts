// Auto-generated Zod schema for ToolbarToggleGroupProps
// Generated on: 2025-10-16T18:56:01.617Z
import { z } from 'zod'

export const ToolbarToggleGroupPropsSchema = z.object({
  /** Controls when filters are shown and when the toggle button is hidden. */
  breakpoint: z.enum(['md', 'lg', 'xl', '2xl']),
  /** Optional callback for clearing all filters in the toolbar toggle group */
  clearAllFilters: z.function().optional(),
  /** Text to display in the clear all filters button of the toolbar toggle group */
  clearFiltersButtonText: z.string().optional(),
  /** Sets only the column gap at various breakpoints. */
  columnGap: z.enum(['columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap_2xl', 'columnGap_3xl', 'columnGap_4xl';
    md?', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap_2xl', 'columnGap_3xl', 'columnGap_4xl';
    lg?', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap_2xl', 'columnGap_3xl', 'columnGap_4xl';
    xl?', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap_2xl', 'columnGap_3xl', 'columnGap_4xl';
    '2xl'?', 'columnGapNone', 'columnGapXs', 'columnGapSm', 'columnGapMd', 'columnGapLg', 'columnGapXl', 'columnGap_2xl', 'columnGap_3xl', 'columnGap_4xl';
  ']).optional(),
  /** Sets both the column and row gap at various breakpoints. */
  gap: z.enum(['gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap_2xl', 'gap_3xl', 'gap_4xl';
    md?: 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap_2xl', 'gap_3xl', 'gap_4xl';
    lg?: 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap_2xl', 'gap_3xl', 'gap_4xl';
    xl?: 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap_2xl', 'gap_3xl', 'gap_4xl';
    '2xl'?: 'gapNone', 'gapXs', 'gapSm', 'gapMd', 'gapLg', 'gapXl', 'gap_2xl', 'gap_3xl', 'gap_4xl';
  ']).optional(),
  /** Flag indicating when toggle group is expanded for non-managed toolbar toggle groups. */
  isExpanded: z.boolean().optional(),
  /** Reference to a label container group for filters inside the toolbar toggle group */
  labelContainerRef: z.unknown().optional(),
  /** Callback for toggle group click event for non-managed toolbar toggle groups. */
  onToggle: z.custom<Event>().optional(),
  /** Sets only the row gap at various breakpoints. */
  rowGap: z.enum(['rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap_2xl', 'rowGap_3xl', 'rowGap_4xl';
    md?', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap_2xl', 'rowGap_3xl', 'rowGap_4xl';
    lg?', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap_2xl', 'rowGap_3xl', 'rowGap_4xl';
    xl?', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap_2xl', 'rowGap_3xl', 'rowGap_4xl';
    '2xl'?', 'rowGapNone', 'rowGapXs', 'rowGapSm', 'rowGapMd', 'rowGapLg', 'rowGapXl', 'rowGap_2xl', 'rowGap_3xl', 'rowGap_4xl';
  ']).optional(),
  /** Flag indicating that the clear all filters button should be visible in the toolbar toggle group */
  showClearFiltersButton: z.boolean().optional(),
  /** An icon to be rendered when the toggle group has collapsed down */
  toggleIcon: z.custom<React.ReactNode>(),
  /** Visibility at various breakpoints. */
  visibility: z.enum(['visible';
    md?: 'hidden', 'visible';
    lg?: 'hidden', 'visible';
    xl?: 'hidden', 'visible';
    '2xl'?: 'hidden', 'visible';
  ']).optional()
})

export type ToolbarToggleGroupPropsProps = z.infer<typeof ToolbarToggleGroupPropsSchema>
