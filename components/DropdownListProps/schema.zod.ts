// Auto-generated Zod schema for DropdownListProps
import { z } from 'zod'

export const DropdownListPropsSchema = z.object({
  /** Anything which can be rendered in a dropdown list */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of dropdown list */
  className: z.string().optional()
})

export type DropdownListPropsProps = z.infer<typeof DropdownListPropsSchema>
