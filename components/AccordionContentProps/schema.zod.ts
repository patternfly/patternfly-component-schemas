// Auto-generated Zod schema for AccordionContentProps
import { z } from 'zod'

export const AccordionContentPropsSchema = z.object({
  /** Content rendered inside the Accordion */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Accordion content */
  className: z.string().optional(),
  /** Component to use as content container */
  component: z.unknown().optional(),
  /** Props passed to the AccordionExpandableContentBody * */
  contentBodyProps: z.unknown().optional(),
  /** Identify the AccordionContent item */
  id: z.string().optional(),
  /** Flag indicating content is custom. Expanded content Body wrapper will be removed from children.  This allows multiple bodies to be rendered as content. */
  isCustomContent: z.custom<React.ReactNode>().optional(),
  /** Flag to indicate Accordion content is fixed */
  isFixed: z.boolean().optional(),
  /** Id of the controlling accordion toggle to label the content. */
  'Unknown': z.string().optional()
})

export type AccordionContentPropsProps = z.infer<typeof AccordionContentPropsSchema>
