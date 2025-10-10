// Auto-generated Zod schema for AlertGroup
// Generated on: 2025-10-10T18:12:17.793Z
import { z } from 'zod'

export const AlertGroupSchema = z.object({
  /** Determine where the alert is appended to */
  appendTo: z.function().optional(),
  /** Adds an accessible label to the alert group. */
  'aria-label': z.string().optional(),
  /** Alerts to be rendered in the AlertGroup */
  children: z.any().optional(),
  /** Additional classes added to the AlertGroup */
  className: z.string().optional(),
  /** Flag to indicate whether Alerts are animated upon rendering and being dismissed. This is intended
to remain false for testing purposes only. */
  hasAnimations: z.boolean().optional(),
  /** Turns the container into a live region so that changes to content within the AlertGroup, such as appending an Alert, are reliably announced to assistive technology. */
  isLiveRegion: z.boolean().optional(),
  /** Toast notifications are positioned at the top right corner of the viewport */
  isToast: z.boolean().optional(),
  /** Function to call if user clicks on overflow message */
  onOverflowClick: z.function().optional(),
  /** Custom text to show for the overflow message */
  overflowMessage: z.string().optional()
})

export type AlertGroupProps = z.infer<typeof AlertGroupSchema>
