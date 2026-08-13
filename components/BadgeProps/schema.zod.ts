// Auto-generated Zod schema for BadgeProps
import { z } from 'zod'

export const BadgePropsSchema = z.object({
  /** content rendered inside the Badge */
  children: z.custom<React.ReactNode>().optional(),
  /** additional classes added to the Badge */
  className: z.string().optional(),
  /** Adds styling to the badge to indicate it is disabled */
  isDisabled: z.boolean().optional(),
  /** Adds styling to the badge to indicate it has been read */
  isRead: z.boolean().optional(),
  /** Text announced by screen readers to indicate the current content/status of the badge. */
  screenReaderText: z.string().optional()
})

export type BadgePropsProps = z.infer<typeof BadgePropsSchema>
