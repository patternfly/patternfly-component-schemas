// Auto-generated Zod schema for SearchInputSearchAttribute
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SearchInputSearchAttributeSchema = z.object({
  /** The search attribute's value to be provided in the search input's query string.
It should have no spaces and be unique for every attribute. */
  attr: z.string(),
  /** The search attribute's display name. It is used to label the field in the advanced
search menu. */
  display: z.any()
})

export type SearchInputSearchAttributeProps = z.infer<typeof SearchInputSearchAttributeSchema>
