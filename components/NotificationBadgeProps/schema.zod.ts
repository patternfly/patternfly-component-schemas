// Auto-generated Zod schema for NotificationBadgeProps
import { z } from 'zod'

export const NotificationBadgePropsSchema = z.object({
  /** Icon to display for attention variant. */
  attentionIcon: z.custom<React.ReactNode>().optional(),
  /** Content rendered inside the notification badge. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the notification badge. */
  className: z.string().optional(),
  /** A number displayed in the badge alongside the icon. */
  count: z.number().optional(),
  /** Icon to display in the notification badge. */
  icon: z.custom<React.ReactNode>().optional(),
  /** Flag for applying expanded styling and setting the aria-expanded attribute on the
notification badge. */
  isExpanded: z.boolean().optional(),
  /** Callback for when the animation of the notification badge icon ends. */
  onAnimationEnd: z.custom<Event>().optional(),
  /** Flag indicating whether the notification badge animation should be triggered. Each
time this prop is true, the animation will be triggered a single time. */
  shouldNotify: z.boolean().optional(),
  /** Adds an accessible label to the notification badge. */
  'Unknown': z.string().optional(),
  /** Determines the variant of the notification badge. */
  variant: z.enum(['read', 'unread', 'attention']).optional()
})

export type NotificationBadgePropsProps = z.infer<typeof NotificationBadgePropsSchema>
