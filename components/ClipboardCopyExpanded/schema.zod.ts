// Auto-generated Zod schema for ClipboardCopyExpanded
// Generated on: 2025-10-10T18:12:17.789Z
import { z } from 'zod'

export const ClipboardCopyExpandedSchema = z.object({
  className: z.string().optional().default(''),
  isCode: z.boolean().optional().default(false),
  isReadOnly: z.boolean().optional().default(false),
  onChange: z.any().optional().default('(): any => undefined')
})

export type ClipboardCopyExpandedProps = z.infer<typeof ClipboardCopyExpandedSchema>
