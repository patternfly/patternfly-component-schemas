// Auto-generated Zod schema for CompassNavSearch
import { z } from 'zod'

export const CompassNavSearchSchema = z.object({
  /** Accessible label for the nav search. */
  'aria-label': z.string().optional().default('Search'),
  /** Additional classes added to the nav search wrapper. */
  className: z.string().optional(),
  /** Click handler for the search button. */
  onClick: z.custom<Event>().optional(),
  /** Content to display in the tooltip. Defaults to "Search". */
  tooltipContent: z.custom<React.ReactNode>().optional().default('Search')
})

export type CompassNavSearchProps = z.infer<typeof CompassNavSearchSchema>
