// Auto-generated Zod schema for NotificationDrawerListItemProps
import { z } from 'zod'

export const NotificationDrawerListItemPropsSchema = z.object({
  /** Content rendered inside the list item */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the list item */
  className: z.string().optional(),
  /** Modifies the list item to include hover styles on :hover */
  isHoverable: z.boolean().optional(),
  /** Adds styling to the list item to indicate it has been read */
  isRead: z.boolean().optional(),
  /** Callback for when a list item is clicked */
  onClick: z.custom<(event: any) => void>().optional(),
  /** Visually hidden text that conveys the current read state of the notification list item */
  readStateScreenReaderText: z.string().optional(),
  /** Tab index for the list item */
  tabIndex: z.number().optional(),
  /** Variant indicates the severity level */
  variant: z.enum(['custom', 'success', 'danger', 'warning', 'info']).optional()
})

export type NotificationDrawerListItemPropsProps = z.infer<typeof NotificationDrawerListItemPropsSchema>
