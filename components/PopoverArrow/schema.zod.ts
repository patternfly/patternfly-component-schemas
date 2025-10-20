// Auto-generated Zod schema for PopoverArrow
// Generated on: 2025-10-10T18:12:17.772Z
import { z } from 'zod'

export const PopoverArrowSchema = z.object({
  /** Popover arrow additional className */
  className: z.string().optional().default('')
})

export type PopoverArrowProps = z.infer<typeof PopoverArrowSchema>
