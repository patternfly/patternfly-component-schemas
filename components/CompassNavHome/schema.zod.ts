// Auto-generated Zod schema for CompassNavHome
import { z } from 'zod'

export const CompassNavHomeSchema = z.object({
  /** Accessible label for the nav home. */
  'aria-label': z.string().optional().default('Home'),
  /** Additional classes added to the nav home wrapper. */
  className: z.string().optional(),
  /** Click handler for the home button. */
  onClick: z.custom<Event>().optional(),
  /** Content to display in the tooltip. Defaults to "Home". */
  tooltipContent: z.custom<React.ReactNode>().optional().default('Home')
})

export type CompassNavHomeProps = z.infer<typeof CompassNavHomeSchema>
