// Auto-generated Zod schema for Spinner
import { z } from 'zod'

export const SpinnerSchema = z.object({
  /** Accessible label to describe what is loading */
  'aria-label': z.string().optional(),
  /** Id of element which describes what is being loaded */
  'aria-labelledBy': z.string().optional(),
  /** Text describing that current loading status or progress */
  'aria-valuetext': z.string().optional().default('Loading...'),
  /** Additional classes added to the Spinner. */
  className: z.string().optional().default(''),
  /** Diameter of spinner set as CSS variable */
  diameter: z.string().optional(),
  /** Indicates the spinner is inline and the size should inherit the text font size. This will override the size prop. */
  isInline: z.boolean().optional().default(false),
  /** Size variant of progress. */
  size: z.enum(['sm', 'md', 'lg', 'xl']).optional().default('xl')
})

export type SpinnerProps = z.infer<typeof SpinnerSchema>
