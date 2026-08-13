// Auto-generated Zod schema for AccordionExpandableContentBodyProps
import { z } from 'zod'

export const AccordionExpandableContentBodyPropsSchema = z.object({
  /** Content rendered inside the accordion content body */
  children: z.custom<React.ReactNode>().optional()
})

export type AccordionExpandableContentBodyPropsProps = z.infer<typeof AccordionExpandableContentBodyPropsSchema>
