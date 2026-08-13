// Auto-generated Zod schema for PopoverHeaderIcon
import { z } from 'zod'

export const PopoverHeaderIconSchema = z.object({
  /** Content of the header icon */
  children: z.custom<React.ReactNode>(),
  /** Class to be applied to the header icon */
  className: z.string().optional()
})

export type PopoverHeaderIconProps = z.infer<typeof PopoverHeaderIconSchema>
