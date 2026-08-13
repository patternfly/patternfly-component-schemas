// Auto-generated Zod schema for PopoverContentProps
import { z } from 'zod'

export const PopoverContentPropsSchema = z.object({
  /** PopoverContent content */
  children: z.custom<React.ReactNode>(),
  /** PopoverContent additional class */
  className: z.string().optional()
})

export type PopoverContentPropsProps = z.infer<typeof PopoverContentPropsSchema>
