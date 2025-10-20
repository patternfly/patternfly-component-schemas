// Auto-generated Zod schema for PopoverBody
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
