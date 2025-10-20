// Auto-generated Zod schema for PopoverFooter
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverFooterSchema = z.object({
  /** Footer node */
  children: z.any(),
  /** Additional classes added to the Popover footer */
  className: z.string().optional().default('')
})

export type PopoverFooterProps = z.infer<typeof PopoverFooterSchema>
