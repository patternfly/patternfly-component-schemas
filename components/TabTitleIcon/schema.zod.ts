// Auto-generated Zod schema for TabTitleIcon
// Generated on: 2025-10-10T18:12:17.768Z
import { z } from 'zod'

export const TabTitleIconSchema = z.object({
  /** Icon to be rendered inside the tab button title. */
  children: z.any(),
  /** additional classes added to the tab title icon */
  className: z.string().optional().default('')
})

export type TabTitleIconProps = z.infer<typeof TabTitleIconSchema>
