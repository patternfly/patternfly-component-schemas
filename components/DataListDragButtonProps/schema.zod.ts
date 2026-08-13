// Auto-generated Zod schema for DataListDragButtonProps
import { z } from 'zod'

export const DataListDragButtonPropsSchema = z.object({
  /** Additional classes added to the drag button */
  className: z.string().optional(),
  /** Flag indicating if drag is disabled for the item */
  isDisabled: z.boolean().optional(),
  /** Sets button type */
  type: z.enum(['button', 'submit', 'reset']).optional()
})

export type DataListDragButtonPropsProps = z.infer<typeof DataListDragButtonPropsSchema>
