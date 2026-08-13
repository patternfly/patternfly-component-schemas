// Auto-generated Zod schema for AccordionItemProps
import { z } from 'zod'

export const AccordionItemPropsSchema = z.object({
  /** Content rendered inside the accordion item. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the accordion item. */
  className: z.string().optional(),
  /** Flag to indicate whether the accordion item is expanded. */
  isExpanded: z.boolean().optional()
})

export type AccordionItemPropsProps = z.infer<typeof AccordionItemPropsSchema>
