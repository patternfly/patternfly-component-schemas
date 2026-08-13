// Auto-generated Zod schema for PopoverHeaderIconProps
import { z } from 'zod'

export const PopoverHeaderIconPropsSchema = z.object({
  /** Content of the header icon */
  children: z.custom<React.ReactNode>(),
  /** Class to be applied to the header icon */
  className: z.string().optional()
})

export type PopoverHeaderIconPropsProps = z.infer<typeof PopoverHeaderIconPropsSchema>
