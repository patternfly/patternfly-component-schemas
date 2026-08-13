// Auto-generated Zod schema for TruncateProps
import { z } from 'zod'

export const TruncatePropsSchema = z.object({
  /** Class to add to outer span */
  className: z.string().optional(),
  /** Text to truncate */
  content: z.string(),
  /** An HREF to turn the truncate wrapper into an anchor element. For more custom control, use the
tooltipProps with a triggerRef property passed in. */
  href: z.string().optional(),
  innerRef: z.unknown().optional(),
  /** The maximum number of characters to display before truncating. This will always truncate content
when its length exceeds the value passed to this prop, and container width/resizing will not affect truncation. */
  maxCharsDisplayed: z.number().optional(),
  /** The content to use to signify omission of characters when using the maxCharsDisplayed prop.
By default this will render an ellipsis. */
  omissionContent: z.string().optional(),
  /** Where the text will be truncated */
  position: z.enum(['start', 'middle', 'end']).optional(),
  /** Tooltip position */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Additional props to pass to the tooltip. */
  tooltipProps: z.unknown().optional(),
  /** The number of characters displayed in the second half of a middle truncation. This will be overridden by
the maxCharsDisplayed prop. */
  trailingNumChars: z.number().optional()
})

export type TruncatePropsProps = z.infer<typeof TruncatePropsSchema>
