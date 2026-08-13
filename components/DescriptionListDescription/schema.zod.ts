// Auto-generated Zod schema for DescriptionListDescription
import { z } from 'zod'

export const DescriptionListDescriptionSchema = z.object({
  /** Anything that can be rendered inside of list description */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes added to the DescriptionListDescription */
  className: z.string().optional()
})

export type DescriptionListDescriptionProps = z.infer<typeof DescriptionListDescriptionSchema>
