// Auto-generated Zod schema for ClipboardCopyButtonProps
import { z } from 'zod'

export const ClipboardCopyButtonPropsSchema = z.object({
  /** Content of the copy button */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the copy button */
  className: z.string().optional(),
  /** Entry delay on the copy button tooltip */
  entryDelay: z.number().optional(),
  /** Exit delay on the copy button tooltip */
  exitDelay: z.number().optional(),
  /** Removes padding from clipboard copy button. This is used for inline-compact variant */
  hasNoPadding: z.boolean().optional(),
  /** ID of the copy button */
  id: z.string(),
  /** Max width of the copy button tooltip */
  maxWidth: z.string().optional(),
  /** Callback for the copy when the button is clicked */
  onClick: z.custom<Event>(),
  /** Callback when tooltip's hide transition has finished executing */
  onTooltipHidden: z.custom<() => void>().optional(),
  /** Position of the copy button tooltip */
  position: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** ID of the content that is being copied */
  textId: z.string(),
  /** Aria-label for the copy button */
  'Unknown': z.string().optional(),
  /** Variant of the copy button */
  variant: z.enum(['control', 'plain']).optional()
})

export type ClipboardCopyButtonPropsProps = z.infer<typeof ClipboardCopyButtonPropsSchema>
