// Auto-generated Zod schema for ClipboardCopyState
// Generated on: 2025-10-16T19:02:51.752Z
import { z } from 'zod'

export const ClipboardCopyStateSchema = z.object({
  copied: z.boolean(),
  expanded: z.boolean(),
  text: z.string(),
  textWhenExpanded: z.string()
})

export type ClipboardCopyStateProps = z.infer<typeof ClipboardCopyStateSchema>
