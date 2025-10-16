// Auto-generated Zod schema for ClipboardCopyToggle
// Generated on: 2025-10-16T18:45:33.878Z
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
