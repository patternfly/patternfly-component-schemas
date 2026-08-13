// Auto-generated Zod schema for CompassNavSearchProps
import { z } from 'zod'

export const CompassNavSearchPropsSchema = z.object({
  /** Additional classes added to the nav search wrapper. */
  className: z.string().optional(),
  /** Click handler for the search button. */
  onClick: z.custom<Event>().optional(),
  /** Content to display in the tooltip. Defaults to "Search". */
  tooltipContent: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the nav search. */
  'Unknown': z.string().optional()
})

export type CompassNavSearchPropsProps = z.infer<typeof CompassNavSearchPropsSchema>
