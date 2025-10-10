// Auto-generated Zod schema for TabTitleText
// Generated on: 2025-10-10T18:12:17.768Z
import { z } from 'zod'

export const TabTitleTextSchema = z.object({
  /** Text to be rendered inside the tab button title. */
  children: z.any(),
  /** additional classes added to the tab title text */
  className: z.string().optional().default('')
})

export type TabTitleTextProps = z.infer<typeof TabTitleTextSchema>
