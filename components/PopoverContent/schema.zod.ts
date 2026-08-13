// Auto-generated Zod schema for PopoverContent
import { z } from 'zod'

export const PopoverContentSchema = z.object({
  /** PopoverContent content */
  children: z.custom<React.ReactNode>(),
  /** PopoverContent additional class */
  className: z.string().optional().default('null')
})

export type PopoverContentProps = z.infer<typeof PopoverContentSchema>
