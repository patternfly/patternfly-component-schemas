// Auto-generated Zod schema for ClipboardCopyAction
import { z } from 'zod'

export const ClipboardCopyActionSchema = z.object({
  /** Content rendered inside the clipboard copy action. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the clipboard copy action. */
  className: z.string().optional().default('')
})

export type ClipboardCopyActionProps = z.infer<typeof ClipboardCopyActionSchema>
