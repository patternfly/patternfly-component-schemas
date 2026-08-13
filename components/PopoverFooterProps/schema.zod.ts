// Auto-generated Zod schema for PopoverFooterProps
import { z } from 'zod'

export const PopoverFooterPropsSchema = z.object({
  /** Footer node */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the Popover footer */
  className: z.string().optional()
})

export type PopoverFooterPropsProps = z.infer<typeof PopoverFooterPropsSchema>
