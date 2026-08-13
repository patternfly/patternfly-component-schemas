// Auto-generated Zod schema for ClipboardCopyToggleProps
import { z } from 'zod'

export const ClipboardCopyTogglePropsSchema = z.object({
  className: z.string().optional(),
  contentId: z.string(),
  id: z.string(),
  isExpanded: z.boolean().optional(),
  onClick: z.custom<Event>()
})

export type ClipboardCopyTogglePropsProps = z.infer<typeof ClipboardCopyTogglePropsSchema>
