// Auto-generated Zod schema for ClipboardCopyToggle
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const ClipboardCopyToggleSchema = z.object({
  className: z.string().optional(),
  contentId: z.string(),
  id: z.string(),
  isExpanded: z.boolean().optional().default(false),
  onClick: z.any(),
  textId: z.string()
})

export type ClipboardCopyToggleProps = z.infer<typeof ClipboardCopyToggleSchema>
