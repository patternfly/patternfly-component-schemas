// Auto-generated Zod schema for AccordionExpandableContentBody
import { z } from 'zod'

export const AccordionExpandableContentBodySchema = z.object({
  /** Content rendered inside the accordion content body */
  children: z.custom<React.ReactNode>().optional().default('null')
})

export type AccordionExpandableContentBodyProps = z.infer<typeof AccordionExpandableContentBodySchema>
