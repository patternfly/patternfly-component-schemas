// Auto-generated Zod schema for AccordionContent
import { z } from 'zod'

export const AccordionContentSchema = z.object({
  /** Adds accessible text to the Accordion content */
  'aria-label': z.string().optional().default(''),
  /** Id of the controlling accordion toggle to label the content. */
  'aria-labelledby': z.string().optional(),
  /** Content rendered inside the Accordion */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the Accordion content */
  className: z.string().optional().default(''),
  /** Component to use as content container */
  component: z.unknown().optional(),
  /** Props passed to the AccordionExpandableContentBody * */
  contentBodyProps: z.unknown().optional(),
  /** Identify the AccordionContent item */
  id: z.string().optional().default(''),
  /** Flag indicating content is custom. Expanded content Body wrapper will be removed from children.  This allows multiple bodies to be rendered as content. */
  isCustomContent: z.custom<React.ReactNode>().optional().default(false),
  /** Flag to indicate Accordion content is fixed */
  isFixed: z.boolean().optional().default(false)
})

export type AccordionContentProps = z.infer<typeof AccordionContentSchema>
