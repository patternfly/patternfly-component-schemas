// Auto-generated Zod schema for MenuSearchInputProps
import { z } from 'zod'

export const MenuSearchInputPropsSchema = z.object({
  /** Items within input */
  children: z.custom<React.ReactNode>().optional(),
  innerRef: z.unknown().optional()
})

export type MenuSearchInputPropsProps = z.infer<typeof MenuSearchInputPropsSchema>
