// Auto-generated Zod schema for DescriptionListDescriptionProps
import { z } from 'zod'

export const DescriptionListDescriptionPropsSchema = z.object({
  /** Anything that can be rendered inside of list description */
  children: z.custom<React.ReactNode>(),
  /** Additional classes added to the DescriptionListDescription */
  className: z.string().optional()
})

export type DescriptionListDescriptionPropsProps = z.infer<typeof DescriptionListDescriptionPropsSchema>
