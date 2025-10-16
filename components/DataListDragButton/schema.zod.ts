// Auto-generated Zod schema for DataListDragButton
// Generated on: 2025-10-16T19:25:27.775Z
import { z } from 'zod'

export const DataListDragButtonSchema = z.object({
  /** Additional classes added to the drag button */
  className: z.string().optional().default(''),
  /** Flag indicating if drag is disabled for the item */
  isDisabled: z.boolean().optional().default(false),
  /** Sets button type */
  type: z.enum(['button', 'submit', 'reset']).optional()
})

export type DataListDragButtonProps = z.infer<typeof DataListDragButtonSchema>
