// Auto-generated Zod schema for CompassMainFooterProps
import { z } from 'zod'

export const CompassMainFooterPropsSchema = z.object({
  /** Main footer content */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the main footer */
  className: z.string().optional(),
  /** Indicates if the main footer is expanded */
  isExpanded: z.boolean().optional()
})

export type CompassMainFooterPropsProps = z.infer<typeof CompassMainFooterPropsSchema>
