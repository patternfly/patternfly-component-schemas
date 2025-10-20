// Auto-generated Zod schema for ClipboardCopyToggle
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
