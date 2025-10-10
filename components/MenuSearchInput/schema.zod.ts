// Auto-generated Zod schema for MenuSearchInput
// Generated on: 2025-10-10T18:12:17.778Z
import { z } from 'zod'

export const MenuSearchInputSchema = z.object({
  /** Items within input */
  children: z.any().optional()
})

export type MenuSearchInputProps = z.infer<typeof MenuSearchInputSchema>
