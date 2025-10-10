// Auto-generated Zod schema for PopoverBody
// Generated on: 2025-10-10T18:12:17.772Z
import { z } from 'zod'

export const PopoverBodySchema = z.object({
  /** Popover body content */
  children: z.any(),
  /** Classes to be applied to the popover body. */
  className: z.string().optional(),
  /** Popover body id */
  id: z.string()
})

export type PopoverBodyProps = z.infer<typeof PopoverBodySchema>
