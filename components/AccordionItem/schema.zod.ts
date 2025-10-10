// Auto-generated Zod schema for AccordionItem
// Generated on: 2025-10-10T18:12:17.793Z
import { z } from 'zod'

export const AccordionItemSchema = z.object({
  /** Content rendered inside the accordion item. */
  children: z.any().optional().default('null'),
  /** Additional classes added to the accordion item. */
  className: z.string().optional(),
  /** Flag to indicate whether the accordion item is expanded. */
  isExpanded: z.boolean().optional().default(false)
})

export type AccordionItemProps = z.infer<typeof AccordionItemSchema>
