// Auto-generated Zod schema for DualListSelectorPane-deprecated
// Generated on: 2025-10-10T18:12:17.799Z
import { z } from 'zod'

export const DualListSelectorPaneSchema = z.object({
  /** Actions to place above the pane. */
  actions: z.array(z.any()).optional(),
  /** A dual list selector list or dual list selector tree to be rendered in the pane. */
  children: z.any().optional(),
  /** Additional classes applied to the dual list selector pane. */
  className: z.string().optional().default(''),
  /** Id of the pane. */
  id: z.string().optional().default('getUniqueId('dual-list-selector-pane')'),
  /** Flag indicating if this pane is the chosen pane. */
  isChosen: z.boolean().optional().default(false),
  /** Flag indicating whether the component is disabled. */
  isDisabled: z.boolean().optional().default(false),
  /** Minimum height of the list of options rendered in the pane. * */
  listMinHeight: z.string().optional(),
  /** Callback for search input. To be used when isSearchable is true. */
  onSearch: z.any().optional(),
  /** A search input placed above the list at the top of the pane, before actions. */
  searchInput: z.any().optional(),
  /** Status to display above the pane. */
  status: z.string().optional().default(''),
  /** Title of the pane. */
  title: z.any().optional().default('')
})

export type DualListSelectorPaneProps = z.infer<typeof DualListSelectorPaneSchema>
