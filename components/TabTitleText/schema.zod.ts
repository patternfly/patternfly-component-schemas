// Auto-generated Zod schema for TabTitleText
import { z } from 'zod'

export const TabTitleTextSchema = z.object({
  /** Text to be rendered inside the tab button title. */
  children: z.custom<React.ReactNode>(),
  /** additional classes added to the tab title text */
  className: z.string().optional().default('')
})

export type TabTitleTextProps = z.infer<typeof TabTitleTextSchema>
