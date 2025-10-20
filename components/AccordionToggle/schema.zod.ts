// Auto-generated Zod schema for AccordionToggle
import { z } from 'zod'

export const AccordionToggleSchema = z.object({
  /** Content rendered inside the Accordion toggle */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the Accordion Toggle */
  className: z.string().optional().default(''),
  /** Container to override the default for toggle */
  component: z.unknown().optional(),
  /** Identify the Accordion toggle number */
  id: z.string()
})

export type AccordionToggleProps = z.infer<typeof AccordionToggleSchema>
