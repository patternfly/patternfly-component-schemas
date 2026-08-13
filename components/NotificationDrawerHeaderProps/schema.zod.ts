// Auto-generated Zod schema for NotificationDrawerHeaderProps
import { z } from 'zod'

export const NotificationDrawerHeaderPropsSchema = z.object({
  /** Content rendered inside the drawer */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes for notification drawer header. */
  className: z.string().optional(),
  /** Adds custom accessible text to the notification drawer close button. */
  closeButtonAriaLabel: z.string().optional(),
  /** Notification drawer heading count */
  count: z.number().optional(),
  /** Notification drawer heading custom text which can be used instead of providing count/unreadText */
  customText: z.string().optional(),
  /** Callback for when close button is clicked */
  onClose: z.any().optional(),
  /** Notification drawer heading title */
  title: z.string().optional(),
  /** Notification drawer heading unread text used in combination with a count */
  unreadText: z.string().optional()
})

export type NotificationDrawerHeaderPropsProps = z.infer<typeof NotificationDrawerHeaderPropsSchema>
