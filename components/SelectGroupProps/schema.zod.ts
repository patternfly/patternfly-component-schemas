// Auto-generated Zod schema for SelectGroupProps
import { z } from 'zod'

export const SelectGroupPropsSchema = z.object({
  /** Anything which can be rendered in a select group */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of select group */
  className: z.string().optional(),
  /** Label of the select group */
  label: z.custom<React.ReactNode>().optional()
})

export type SelectGroupPropsProps = z.infer<typeof SelectGroupPropsSchema>
