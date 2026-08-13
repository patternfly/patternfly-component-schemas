// Auto-generated Zod schema for ClipboardCopyActionProps
import { z } from 'zod'

export const ClipboardCopyActionPropsSchema = z.object({
  /** Content rendered inside the clipboard copy action. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the clipboard copy action. */
  className: z.string().optional()
})

export type ClipboardCopyActionPropsProps = z.infer<typeof ClipboardCopyActionPropsSchema>
