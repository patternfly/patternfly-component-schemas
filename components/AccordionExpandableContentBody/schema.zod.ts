// Auto-generated Zod schema for AccordionExpandableContentBody
// Generated on: 2025-10-10T18:12:17.793Z
import { z } from 'zod'

export const AccordionExpandableContentBodySchema = z.object({
  /** Content rendered inside the accordion content body */
  children: z.any().optional().default('null')
})

export type AccordionExpandableContentBodyProps = z.infer<typeof AccordionExpandableContentBodySchema>
