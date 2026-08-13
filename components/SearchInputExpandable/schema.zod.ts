// Auto-generated Zod schema for SearchInputExpandable
import { z } from 'zod'

export const SearchInputExpandableSchema = z.object({
  /** Flag indicating animations should be enabled when the search input expands and collapses. Note: this will change the component's DOM structure. In a future breaking change release, this will become the default behavior and will no longer be needed. */
  hasAnimations: z.boolean().optional(),
  /** Flag to indicate if the search input is expanded. */
  isExpanded: z.boolean(),
  /** Callback function to toggle the expandable search input. */
  onToggleExpand: z.custom<Event>(),
  /** An accessible label for the expandable search input toggle. */
  toggleAriaLabel: z.string()
})

export type SearchInputExpandableProps = z.infer<typeof SearchInputExpandableSchema>
