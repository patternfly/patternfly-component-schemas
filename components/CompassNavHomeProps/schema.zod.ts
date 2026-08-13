// Auto-generated Zod schema for CompassNavHomeProps
import { z } from 'zod'

export const CompassNavHomePropsSchema = z.object({
  /** Additional classes added to the nav home wrapper. */
  className: z.string().optional(),
  /** Click handler for the home button. */
  onClick: z.custom<Event>().optional(),
  /** Content to display in the tooltip. Defaults to "Home". */
  tooltipContent: z.custom<React.ReactNode>().optional(),
  /** Accessible label for the nav home. */
  'Unknown': z.string().optional()
})

export type CompassNavHomePropsProps = z.infer<typeof CompassNavHomePropsSchema>
