// Auto-generated Zod schema for PopoverArrowProps
import { z } from 'zod'

export const PopoverArrowPropsSchema = z.object({
  /** Popover arrow additional className */
  className: z.string().optional()
})

export type PopoverArrowPropsProps = z.infer<typeof PopoverArrowPropsSchema>
