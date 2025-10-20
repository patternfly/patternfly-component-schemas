// Auto-generated Zod schema for ClipboardCopyAction
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const ClipboardCopyActionSchema = z.object({
  /** Content rendered inside the clipboard copy action. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the clipboard copy action. */
  className: z.string().optional().default('')
})

export type ClipboardCopyActionProps = z.infer<typeof ClipboardCopyActionSchema>
