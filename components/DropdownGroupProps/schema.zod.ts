// Auto-generated Zod schema for DropdownGroupProps
import { z } from 'zod'

export const DropdownGroupPropsSchema = z.object({
  /** Anything which can be rendered in a dropdown group. */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of dropdown group */
  className: z.string().optional(),
  /** Label of the dropdown group */
  label: z.custom<React.ReactNode>().optional()
})

export type DropdownGroupPropsProps = z.infer<typeof DropdownGroupPropsSchema>
