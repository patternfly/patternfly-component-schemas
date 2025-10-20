// Auto-generated Zod schema for Accordion
import { z } from 'zod'

export const AccordionSchema = z.object({
  /** Adds accessible text to the Accordion */
  'aria-label': z.string().optional(),
  /** Flag to indicate whether use definition list or div */
  asDefinitionList: z.boolean().optional().default(true),
  /** Content rendered inside the Accordion */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the Accordion */
  className: z.string().optional().default(''),
  /** Display size variant. */
  displaySize: z.enum(['default', 'lg']).optional().default('default'),
  /** Heading level to use */
  headingLevel: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).optional().default('h3'),
  /** Flag to indicate the accordion had a border */
  isBordered: z.boolean().optional().default(false),
  /** Sets the toggle icon position for all accordion toggles. */
  togglePosition: z.enum(['start', 'end']).optional().default('end')
})

export type AccordionProps = z.infer<typeof AccordionSchema>
