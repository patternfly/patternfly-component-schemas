// Auto-generated Zod schema for AccordionProps
import { z } from 'zod'

export const AccordionPropsSchema = z.object({
  /** Flag to indicate whether use definition list or div */
  asDefinitionList: z.boolean().optional(),
  /** Content rendered inside the Accordion */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Accordion */
  className: z.string().optional(),
  /** Display size variant. */
  displaySize: z.enum(['default', 'lg']).optional(),
  /** Heading level to use */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional(),
  /** Flag to indicate the accordion had a border */
  isBordered: z.boolean().optional(),
  /** Sets the toggle icon position for all accordion toggles. */
  togglePosition: z.enum(['start', 'end']).optional(),
  /** Adds accessible text to the Accordion */
  'Unknown': z.string().optional()
})

export type AccordionPropsProps = z.infer<typeof AccordionPropsSchema>
