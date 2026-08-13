// Auto-generated Zod schema for TabTitleTextProps
import { z } from 'zod'

export const TabTitleTextPropsSchema = z.object({
  /** Text to be rendered inside the tab button title. */
  children: z.custom<React.ReactNode>(),
  /** additional classes added to the tab title text */
  className: z.string().optional()
})

export type TabTitleTextPropsProps = z.infer<typeof TabTitleTextPropsSchema>
