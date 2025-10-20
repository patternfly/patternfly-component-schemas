// Auto-generated Zod schema for NotificationDrawerGroup
import { z } from 'zod'

export const NotificationDrawerGroupSchema = z.object({
  /** Content rendered inside the group */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the group */
  className: z.string().optional().default(''),
  /** Notification drawer group count */
  count: z.number(),
  /** Sets the heading level to use for the group title. Default is h1. */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('h1'),
  /** Adds styling to the group to indicate expanded state */
  isExpanded: z.boolean(),
  /** Adds styling to the group to indicate whether it has been read */
  isRead: z.boolean().optional().default(false),
  /** Callback for when group button is clicked to expand */
  onExpand: z.custom<(event: any, value: boolean) => void>().optional().default('(event: any, expanded: boolean) => undefined as any'),
  /** Notification drawer group title */
  title: z.custom<React.ReactNode>(),
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Truncate title to number of lines */
  truncateTitle: z.number().optional().default(0)
})

export type NotificationDrawerGroupProps = z.infer<typeof NotificationDrawerGroupSchema>
