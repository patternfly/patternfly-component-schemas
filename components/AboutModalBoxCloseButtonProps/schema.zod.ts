// Auto-generated Zod schema for AboutModalBoxCloseButtonProps
// Generated on: 2025-10-16T19:02:51.757Z
import { z } from 'zod'

export const AboutModalBoxCloseButtonPropsSchema = z.object({
  /** A callback for when the close button is clicked */
  onClose: z.any().optional(),
  /** Set close button aria label */
  'Unknown': z.string().optional()
})

export type AboutModalBoxCloseButtonPropsProps = z.infer<typeof AboutModalBoxCloseButtonPropsSchema>
