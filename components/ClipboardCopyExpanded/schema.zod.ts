// Auto-generated Zod schema for ClipboardCopyExpanded
// Generated on: 2025-10-16T19:25:27.777Z
import { z } from 'zod'

export const ClipboardCopyExpandedSchema = z.object({
  className: z.string().optional().default(''),
  isCode: z.boolean().optional().default(false),
  isReadOnly: z.boolean().optional().default(false),
  onChange: z.custom<Event>().optional().default('(): any => undefined')
})

export type ClipboardCopyExpandedProps = z.infer<typeof ClipboardCopyExpandedSchema>
