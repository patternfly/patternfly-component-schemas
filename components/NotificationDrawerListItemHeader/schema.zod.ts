// Auto-generated Zod schema for NotificationDrawerListItemHeader
import { z } from 'zod'

export const NotificationDrawerListItemHeaderSchema = z.object({
  /** Removes the offset of the notification drawer actions. */
  actionHasNoOffset: z.boolean().optional().default(false),
  /** Actions rendered inside the notification drawer list item header */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes for notification drawer list item header. */
  className: z.string().optional().default(''),
  /** Sets the heading level to use for the list item header title. Default is h2. */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('h2'),
  /** Add custom icon for notification drawer list item header */
  icon: z.custom<React.ReactNode>().optional().default('null'),
  /** Notification drawer list item header screen reader title */
  srTitle: z.string().optional(),
  /** Notification drawer list item title */
  title: z.string(),
  /** Position of the tooltip which is displayed if text is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Truncate title to number of lines */
  truncateTitle: z.number().optional().default(0),
  /** Variant indicates the severity level */
  variant: z.enum(['success', 'danger', 'warning', 'info', 'custom']).optional().default('custom')
})

export type NotificationDrawerListItemHeaderProps = z.infer<typeof NotificationDrawerListItemHeaderSchema>
