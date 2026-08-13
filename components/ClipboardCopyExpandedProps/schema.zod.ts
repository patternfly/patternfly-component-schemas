// Auto-generated Zod schema for ClipboardCopyExpandedProps
import { z } from 'zod'

export const ClipboardCopyExpandedPropsSchema = z.object({
  className: z.string().optional(),
  isCode: z.boolean().optional(),
  isReadOnly: z.boolean().optional(),
  onChange: z.custom<Event>().optional()
})

export type ClipboardCopyExpandedPropsProps = z.infer<typeof ClipboardCopyExpandedPropsSchema>
