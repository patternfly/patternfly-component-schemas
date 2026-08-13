// Auto-generated Zod schema for PopoverArrow
import { z } from 'zod'

export const PopoverArrowSchema = z.object({
  /** Popover arrow additional className */
  className: z.string().optional().default('')
})

export type PopoverArrowProps = z.infer<typeof PopoverArrowSchema>
