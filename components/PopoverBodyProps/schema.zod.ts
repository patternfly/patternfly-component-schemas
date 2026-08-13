// Auto-generated Zod schema for PopoverBodyProps
import { z } from 'zod'

export const PopoverBodyPropsSchema = z.object({
  /** Popover body content */
  children: z.custom<React.ReactNode>(),
  /** Classes to be applied to the popover body. */
  className: z.string().optional(),
  /** Popover body id */
  id: z.string()
})

export type PopoverBodyPropsProps = z.infer<typeof PopoverBodyPropsSchema>
