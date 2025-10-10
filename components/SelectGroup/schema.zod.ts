// Auto-generated Zod schema for SelectGroup
// Generated on: 2025-10-10T18:12:17.770Z
import { z } from 'zod'

export const SelectGroupSchema = z.object({
  /** Anything which can be rendered in a select group */
  children: z.any(),
  /** Classes applied to root element of select group */
  className: z.string().optional(),
  /** Label of the select group */
  label: z.any().optional()
})

export type SelectGroupProps = z.infer<typeof SelectGroupSchema>
