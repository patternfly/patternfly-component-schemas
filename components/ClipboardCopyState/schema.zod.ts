// Auto-generated Zod schema for ClipboardCopyState
import { z } from 'zod'

export const ClipboardCopyStateSchema = z.object({
  copied: z.boolean(),
  expanded: z.boolean(),
  text: z.string(),
  textWhenExpanded: z.string()
})

export type ClipboardCopyStateProps = z.infer<typeof ClipboardCopyStateSchema>
