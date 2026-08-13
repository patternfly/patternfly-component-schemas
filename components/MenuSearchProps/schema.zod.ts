// Auto-generated Zod schema for MenuSearchProps
import { z } from 'zod'

export const MenuSearchPropsSchema = z.object({
  /** Items within search */
  children: z.custom<React.ReactNode>().optional(),
  innerRef: z.unknown().optional()
})

export type MenuSearchPropsProps = z.infer<typeof MenuSearchPropsSchema>
