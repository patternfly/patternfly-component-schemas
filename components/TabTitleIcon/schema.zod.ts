// Auto-generated Zod schema for TabTitleIcon
import { z } from 'zod'

export const TabTitleIconSchema = z.object({
  /** Icon to be rendered inside the tab button title. */
  children: z.custom<React.ReactNode>(),
  /** additional classes added to the tab title icon */
  className: z.string().optional().default('')
})

export type TabTitleIconProps = z.infer<typeof TabTitleIconSchema>
