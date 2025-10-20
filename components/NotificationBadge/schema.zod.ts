// Auto-generated Zod schema for NotificationBadge
import { z } from 'zod'

export const NotificationBadgeSchema = z.object({
  /** Adds an accessible label to the notification badge. */
  'aria-label': z.string().optional(),
  /** Icon to display for attention variant. */
  attentionIcon: z.custom<React.ReactNode>().optional().default('<AttentionBellIcon />'),
  /** Content rendered inside the notification badge. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification badge. */
  className: z.string().optional(),
  /** A number displayed in the badge alongside the icon. */
  count: z.number().optional().default(0),
  /** Icon to display in the notification badge. */
  icon: z.custom<React.ReactNode>().optional().default('<BellIcon />'),
  /** Flag for applying expanded styling and setting the aria-expanded attribute on the
notification badge. */
  isExpanded: z.boolean().optional().default(false),
  /** Callback for when the animation of the notification badge icon ends. */
  onAnimationEnd: z.custom<Event>().optional(),
  /** Flag indicating whether the notification badge animation should be triggered. Each
time this prop is true, the animation will be triggered a single time. */
  shouldNotify: z.boolean().optional().default(false),
  /** Determines the variant of the notification badge. */
  variant: z.enum(['read', 'unread', 'attention']).optional().default('NotificationBadgeVariant.read')
})

export type NotificationBadgeProps = z.infer<typeof NotificationBadgeSchema>
