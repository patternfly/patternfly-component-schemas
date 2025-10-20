// Auto-generated Zod schema for SelectListProps
import { z } from 'zod'

export const SelectListPropsSchema = z.object({
  /** Anything which can be rendered in a select list */
  children: z.custom<React.ReactNode>(),
  /** Classes applied to root element of select list */
  className: z.string().optional(),
  /** Indicates to assistive technologies whether more than one item can be selected for a non-checkbox select */
  isAriaMultiselectable: z.boolean().optional()
})

export type SelectListPropsProps = z.infer<typeof SelectListPropsSchema>
