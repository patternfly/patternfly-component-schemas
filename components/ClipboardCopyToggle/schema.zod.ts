// Auto-generated Zod schema for ClipboardCopyToggle
// Generated on: 2025-10-16T19:25:27.776Z
import { z } from 'zod'

export const ClipboardCopyToggleSchema = z.object({
  className: z.string().optional(),
  contentId: z.string(),
  id: z.string(),
  isExpanded: z.boolean().optional().default(false),
  onClick: z.custom<Event>(),
  textId: z.string()
})

export type ClipboardCopyToggleProps = z.infer<typeof ClipboardCopyToggleSchema>
