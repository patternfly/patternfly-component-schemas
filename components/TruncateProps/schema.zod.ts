// Auto-generated Zod schema for TruncateProps
// Generated on: 2025-10-16T19:02:51.720Z
import { z } from 'zod'

export const TruncatePropsSchema = z.object({
  /** Class to add to outer span */
  className: z.string().optional(),
  /** Text to truncate */
  content: z.string(),
  /** Where the text will be truncated */
  position: z.enum(['start', 'middle', 'end']).optional(),
  refToGetParent: z.unknown().optional(),
  /** Tooltip position */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** The number of characters displayed in the second half of the truncation */
  trailingNumChars: z.number().optional()
})

export type TruncatePropsProps = z.infer<typeof TruncatePropsSchema>
