// Auto-generated Zod schema for PopoverContent
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverContentSchema = z.object({
  /** PopoverContent content */
  children: z.any(),
  /** PopoverContent additional class */
  className: z.string().optional().default('null')
})

export type PopoverContentProps = z.infer<typeof PopoverContentSchema>
