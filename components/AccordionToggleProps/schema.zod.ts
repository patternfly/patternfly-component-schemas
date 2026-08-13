// Auto-generated Zod schema for AccordionToggleProps
import { z } from 'zod'

export const AccordionTogglePropsSchema = z.object({
  /** Content rendered inside the Accordion toggle */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes added to the Accordion Toggle */
  className: z.string().optional(),
  /** Container to override the default for toggle */
  component: z.unknown().optional(),
  /** Identify the Accordion toggle number */
  id: z.string()
})

export type AccordionTogglePropsProps = z.infer<typeof AccordionTogglePropsSchema>
