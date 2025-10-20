// Auto-generated Zod schema for ClipboardCopyButton
import { z } from 'zod'

export const ClipboardCopyButtonSchema = z.object({
  /** Aria-label for the copy button */
  'aria-label': z.string().optional().default('Copyable input'),
  /** Content of the copy button */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the copy button */
  className: z.string().optional(),
  /** Entry delay on the copy button tooltip */
  entryDelay: z.number().optional().default(300),
  /** Exit delay on the copy button tooltip */
  exitDelay: z.number().optional().default(0),
  /** Removes padding from clipboard copy button. This is used for inline-compact variant */
  hasNoPadding: z.boolean().optional().default(false),
  /** ID of the copy button */
  id: z.string(),
  /** Max width of the copy button tooltip */
  maxWidth: z.string().optional().default('100px'),
  /** Callback for the copy when the button is clicked */
  onClick: z.custom<Event>(),
  /** Callback when tooltip's hide transition has finished executing */
  onTooltipHidden: z.custom<() => void>().optional().default('() => {}'),
  /** Position of the copy button tooltip */
  position: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional().default('top'),
  /** ID of the content that is being copied */
  textId: z.string(),
  /** Variant of the copy button */
  variant: z.enum(['control', 'plain']).optional().default('control')
})

export type ClipboardCopyButtonProps = z.infer<typeof ClipboardCopyButtonSchema>
