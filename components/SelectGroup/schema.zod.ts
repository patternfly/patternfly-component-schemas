// Auto-generated Zod schema for SelectGroup
// Generated on: 2025-10-16T19:25:27.754Z
import { z } from 'zod'

export const SelectGroupSchema = z.object({
  /** Anything which can be rendered in a select group */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of select group */
  className: z.string().optional(),
  /** Label of the select group */
  label: z.custom<React.ReactNode>().optional()
})

export type SelectGroupProps = z.infer<typeof SelectGroupSchema>
