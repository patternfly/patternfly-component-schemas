// Auto-generated Zod schema for SearchInputExpandable
import { z } from 'zod'

export const SearchInputExpandableSchema = z.object({
  /** Flag to indicate if the search input is expanded. */
  isExpanded: z.boolean(),
  /** Callback function to toggle the expandable search input. */
  onToggleExpand: z.custom<Event>(),
  /** An accessible label for the expandable search input toggle. */
  toggleAriaLabel: z.string()
})

export type SearchInputExpandableProps = z.infer<typeof SearchInputExpandableSchema>
