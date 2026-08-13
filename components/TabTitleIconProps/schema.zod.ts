// Auto-generated Zod schema for TabTitleIconProps
import { z } from 'zod'

export const TabTitleIconPropsSchema = z.object({
  /** Icon to be rendered inside the tab button title. */
  children: z.custom<React.ReactNode>(),
  /** additional classes added to the tab title icon */
  className: z.string().optional()
})

export type TabTitleIconPropsProps = z.infer<typeof TabTitleIconPropsSchema>
