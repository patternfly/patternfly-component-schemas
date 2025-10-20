// Auto-generated Zod schema for DropdownGroup
import { z } from 'zod'

export const DropdownGroupSchema = z.object({
  /** Anything which can be rendered in a dropdown group. */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of dropdown group */
  className: z.string().optional(),
  /** Label of the dropdown group */
  label: z.custom<React.ReactNode>().optional(),
  labelHeadingLevel: z.unknown().optional().default('h1')
})

export type DropdownGroupProps = z.infer<typeof DropdownGroupSchema>
