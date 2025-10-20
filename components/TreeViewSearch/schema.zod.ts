// Auto-generated Zod schema for TreeViewSearch
import { z } from 'zod'

export const TreeViewSearchSchema = z.object({
  /** Accessible label for the search input. */
  'aria-label': z.string().optional(),
  /** Classes applied to the wrapper for the search input. */
  className: z.string().optional(),
  /** Id for the search input. */
  id: z.string().optional(),
  /** Name for the search input. */
  name: z.string().optional(),
  /** Callback for search input. */
  onSearch: z.custom<Event>().optional()
})

export type TreeViewSearchProps = z.infer<typeof TreeViewSearchSchema>
