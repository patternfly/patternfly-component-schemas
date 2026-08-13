// Auto-generated Zod schema for PopoverFooter
import { z } from 'zod'

export const PopoverFooterSchema = z.object({
  /** Footer node */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the Popover footer */
  className: z.string().optional().default('')
})

export type PopoverFooterProps = z.infer<typeof PopoverFooterSchema>
