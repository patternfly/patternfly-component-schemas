// Auto-generated Zod schema for MenuSearch
import { z } from 'zod'

export const MenuSearchSchema = z.object({
  /** Items within search */
  children: z.custom<React.ReactNode>().optional()
})

export type MenuSearchProps = z.infer<typeof MenuSearchSchema>
