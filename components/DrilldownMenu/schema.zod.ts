// Auto-generated Zod schema for DrilldownMenu
// Generated on: 2025-10-16T19:02:51.740Z
import { z } from 'zod'

export const DrilldownMenuSchema = z.object({
  /** Items within drilldown sub-menu */
  children: z.custom<React.ReactNode>().optional(),
  /** Optional callback to get the height of the sub menu */
  getHeight: z.function().optional(),
  /** ID of the drilldown sub-menu */
  id: z.string().optional(),
  /** Flag indicating whether the menu is drilled in */
  isMenuDrilledIn: z.boolean().optional().default(false)
})

export type DrilldownMenuProps = z.infer<typeof DrilldownMenuSchema>
