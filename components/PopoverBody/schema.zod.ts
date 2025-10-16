// Auto-generated Zod schema for PopoverBody
// Generated on: 2025-10-16T19:25:27.756Z
import { z } from 'zod'

export const PopoverBodySchema = z.object({
  /** Popover body content */
  children: z.custom<React.ReactNode>(),
  /** Classes to be applied to the popover body. */
  className: z.string().optional(),
  /** Popover body id */
  id: z.string()
})

export type PopoverBodyProps = z.infer<typeof PopoverBodySchema>
