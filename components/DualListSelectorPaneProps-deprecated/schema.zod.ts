// Auto-generated Zod schema for DualListSelectorPaneProps-deprecated
import { z } from 'zod'

export const DualListSelectorPanePropsSchema = z.object({
  /** Actions to place above the pane. */
  actions: z.array(z.custom<React.ReactNode>()).optional(),
  /** A dual list selector list or dual list selector tree to be rendered in the pane. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the dual list selector pane. */
  className: z.string().optional(),
  filterOption: z.custom<React.ReactNode>().optional(),
  /** Id of the pane. */
  id: z.string().optional(),
  /** Flag indicating if this pane is the chosen pane. */
  isChosen: z.boolean().optional(),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional(),
  isSearchable: z.boolean().optional(),
  /** Minimum height of the list of options rendered in the pane. * */
  listMinHeight: z.string().optional(),
  onFilterUpdate: z.custom<React.ReactNode>().optional(),
  onOptionCheck: z.any().optional(),
  onOptionSelect: z.any().optional(),
  /** Callback for search input. To be used when isSearchable is true. */
  onSearch: z.custom<Event>().optional(),
  onSearchInputChanged: z.custom<Event>().optional(),
  onSearchInputClear: z.custom<Event>().optional(),
  options: z.array(z.custom<React.ReactNode>()).optional(),
  /** A search input placed above the list at the top of the pane, before actions. */
  searchInput: z.custom<React.ReactNode>().optional(),
  searchInputAriaLabel: z.string().optional(),
  selectedOptions: z.any().optional(),
  /** Status to display above the pane. */
  status: z.string().optional(),
  /** Title of the pane. */
  title: z.custom<React.ReactNode>().optional()
})

export type DualListSelectorPanePropsProps = z.infer<typeof DualListSelectorPanePropsSchema>
