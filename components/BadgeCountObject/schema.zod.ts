// Auto-generated Zod schema for BadgeCountObject
import { z } from 'zod'

export const BadgeCountObjectSchema = z.object({
  /** Additional classes added to the badge count */
  className: z.string().optional(),
  /** Adds count number right of button */
  count: z.number().optional(),
  /** Adds styling to the badge to indicate it has been read */
  isRead: z.boolean().optional()
})

export type BadgeCountObjectProps = z.infer<typeof BadgeCountObjectSchema>
