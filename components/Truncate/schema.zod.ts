// Auto-generated Zod schema for Truncate
import { z } from 'zod'

export const TruncateSchema = z.object({
  /** Class to add to outer span */
  className: z.string().optional(),
  /** Text to truncate */
  content: z.string(),
  /** Where the text will be truncated */
  position: z.enum(['start', 'middle', 'end']).optional().default('end'),
  /** Tooltip position */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('top'),
  /** The number of characters displayed in the second half of the truncation */
  trailingNumChars: z.number().optional().default(7)
})

export type TruncateProps = z.infer<typeof TruncateSchema>
