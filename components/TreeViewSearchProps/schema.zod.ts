// Auto-generated Zod schema for TreeViewSearchProps
import { z } from 'zod'

export const TreeViewSearchPropsSchema = z.object({
  /** Classes applied to the wrapper for the search input. */
  className: z.string().optional(),
  /** Id for the search input. */
  id: z.string().optional(),
  /** Name for the search input. */
  name: z.string().optional(),
  /** Callback for search input. */
  onSearch: z.custom<Event>().optional(),
  /** Accessible label for the search input. */
  'Unknown': z.string().optional()
})

export type TreeViewSearchPropsProps = z.infer<typeof TreeViewSearchPropsSchema>
