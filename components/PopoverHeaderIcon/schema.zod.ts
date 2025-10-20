// Auto-generated Zod schema for PopoverHeaderIcon
// Generated on: 2025-10-10T18:12:17.771Z
import { z } from 'zod'

export const PopoverHeaderIconSchema = z.object({
  /** Content of the header icon */
  children: z.any(),
  /** Class to be applied to the header icon */
  className: z.string().optional()
})

export type PopoverHeaderIconProps = z.infer<typeof PopoverHeaderIconSchema>
