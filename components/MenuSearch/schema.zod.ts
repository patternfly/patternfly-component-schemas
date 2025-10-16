// Auto-generated Zod schema for MenuSearch
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const MenuSearchSchema = z.object({
  /** Items within search */
  children: z.any().optional()
})

export type MenuSearchProps = z.infer<typeof MenuSearchSchema>
