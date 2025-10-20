// Auto-generated Zod schema for NotificationDrawerListItem
import { z } from 'zod'

export const NotificationDrawerListItemSchema = z.object({
  /** Content rendered inside the list item */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the list item */
  className: z.string().optional().default(''),
  /** Modifies the list item to include hover styles on :hover */
  isHoverable: z.boolean().optional().default(true),
  /** Adds styling to the list item to indicate it has been read */
  isRead: z.boolean().optional().default(false),
  /** Callback for when a list item is clicked */
  onClick: z.custom<(event: any) => void>().optional().default('(event: React.MouseEvent) => undefined as any'),
  /** Visually hidden text that conveys the current read state of the notification list item */
  readStateScreenReaderText: z.string().optional(),
  /** Tab index for the list item */
  tabIndex: z.number().optional().default(0),
  /** Variant indicates the severity level */
  variant: z.enum(['custom', 'success', 'danger', 'warning', 'info']).optional().default('custom')
})

export type NotificationDrawerListItemProps = z.infer<typeof NotificationDrawerListItemSchema>
