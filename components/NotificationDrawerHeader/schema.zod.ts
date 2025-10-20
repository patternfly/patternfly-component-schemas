// Auto-generated Zod schema for NotificationDrawerHeader
import { z } from 'zod'

export const NotificationDrawerHeaderSchema = z.object({
  /** Content rendered inside the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes for notification drawer header. */
  className: z.string().optional().default(''),
  /** Adds custom accessible text to the notification drawer close button. */
  closeButtonAriaLabel: z.string().optional().default('Close'),
  /** Notification drawer heading count */
  count: z.number().optional(),
  /** Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText: z.string().optional(),
  /** Callback for when close button is clicked */
  onClose: z.any().optional(),
  /** Notification drawer heading title */
  title: z.string().optional().default('Notifications'),
  /** Notification drawer heading unread text used in combination with a count */
  unreadText: z.string().optional().default('unread')
})

export type NotificationDrawerHeaderProps = z.infer<typeof NotificationDrawerHeaderSchema>
