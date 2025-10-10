// Auto-generated Zod schema for DualListSelectorPaneProps-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorPanePropsSchema = z.object({
  /** Actions to place above the pane. */
  actions: z.array(z.any()).optional(),
  /** A dual list selector list or dual list selector tree to be rendered in the pane. */
  children: z.any().optional(),
  /** Additional classes applied to the dual list selector pane. */
  className: z.string().optional(),
  filterOption: z.any().optional(),
  /** Id of the pane. */
  id: z.string().optional(),
  /** Flag indicating if this pane is the chosen pane. */
  isChosen: z.boolean().optional(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional(),
  isSearchable: z.boolean().optional(),
  /** Minimum height of the list of options rendered in the pane. * */
  listMinHeight: z.string().optional(),
  onFilterUpdate: z.array(z.any()).optional(),
  onOptionCheck: z.any().optional(),
  onOptionSelect: z.any().optional(),
  /** Callback for search input. To be used when isSearchable is true. */
  onSearch: z.any().optional(),
  onSearchInputChanged: z.any().optional(),
  onSearchInputClear: z.any().optional(),
  options: z.array(z.any()).optional(),
  /** A search input placed above the list at the top of the pane, before actions. */
  searchInput: z.any().optional(),
  searchInputAriaLabel: z.string().optional(),
  selectedOptions: z.array(z.any()).optional(),
  /** Status to display above the pane. */
  status: z.string().optional(),
  /** Title of the pane. */
  title: z.any().optional()
})

export type DualListSelectorPanePropsProps = z.infer<typeof DualListSelectorPanePropsSchema>
