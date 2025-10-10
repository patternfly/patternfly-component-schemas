// Auto-generated Zod schema for DropdownGroup
// Generated on: 2025-10-10T18:12:17.786Z
import { z } from 'zod'

export const DropdownGroupSchema = z.object({
  /** Anything which can be rendered in a dropdown group. */
  children: z.any(),
  /** Classes applied to root element of dropdown group */
  className: z.string().optional(),
  /** Label of the dropdown group */
  label: z.any().optional(),
  labelHeadingLevel: z.any().optional().default('h1')
})

export type DropdownGroupProps = z.infer<typeof DropdownGroupSchema>
