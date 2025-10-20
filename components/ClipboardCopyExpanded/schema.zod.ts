// Auto-generated Zod schema for ClipboardCopyExpanded
import { z } from 'zod'

export const ClipboardCopyExpandedSchema = z.object({
  className: z.string().optional().default(''),
  isCode: z.boolean().optional().default(false),
  isReadOnly: z.boolean().optional().default(false),
  onChange: z.custom<Event>().optional().default('(): any => undefined')
})

export type ClipboardCopyExpandedProps = z.infer<typeof ClipboardCopyExpandedSchema>
