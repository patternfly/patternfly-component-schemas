// Auto-generated Zod schema for SpinnerProps
import { z } from 'zod'

export const SpinnerPropsSchema = z.object({
  /** Additional classes added to the Spinner. */
  className: z.string().optional(),
  /** Diameter of spinner set as CSS variable */
  diameter: z.string().optional(),
  /** Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop. */
  isInline: z.boolean().optional(),
  /** Size variant of progress. */
  size: z.enum(['sm', 'md', 'lg', 'xl']).optional(),
  /** Id of element which describes what is being loaded */
  'Unknown': z.string().optional()
})

export type SpinnerPropsProps = z.infer<typeof SpinnerPropsSchema>
