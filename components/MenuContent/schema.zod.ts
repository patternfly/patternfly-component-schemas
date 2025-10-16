// Auto-generated Zod schema for MenuContent
// Generated on: 2025-10-16T19:25:27.764Z
import { z } from 'zod'

export const MenuContentSchema = z.object({
  /** Items within group */
  children: z.custom<React.ReactNode>().optional(),
  /** Callback to return the height of the menu content */
  getHeight: z.custom<(height: string) => void>().optional(),
  /** Maximum height of menu content */
  maxMenuHeight: z.string().optional(),
  /** Height of the menu content */
  menuHeight: z.string().optional()
})

export type MenuContentProps = z.infer<typeof MenuContentSchema>
