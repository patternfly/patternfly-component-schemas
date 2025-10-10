// Auto-generated Zod schema for Badge
// Generated on: 2025-10-10T18:12:17.792Z
import { z } from 'zod'

export const BadgeSchema = z.object({
  /** content rendered inside the Badge */
  children: z.any().optional().default(''),
  /** additional classes added to the Badge */
  className: z.string().optional().default(''),
  /** Adds styling to the badge to indicate it is disabled */
  isDisabled: z.boolean().optional().default(false),
  /** Adds styling to the badge to indicate it has been read */
  isRead: z.boolean().optional().default(false),
  /** Text announced by screen readers to indicate the current content/status of the badge. */
  screenReaderText: z.string().optional()
})

export type BadgeProps = z.infer<typeof BadgeSchema>
