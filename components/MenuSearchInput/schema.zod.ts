// Auto-generated Zod schema for MenuSearchInput
import { z } from 'zod'

export const MenuSearchInputSchema = z.object({
  /** Items within input */
  children: z.custom<React.ReactNode>().optional()
})

export type MenuSearchInputProps = z.infer<typeof MenuSearchInputSchema>
