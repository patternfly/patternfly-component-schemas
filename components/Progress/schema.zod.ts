// Auto-generated Zod schema for Progress
import { z } from 'zod'

export const ProgressSchema = z.object({
  /** Adds accessible text to the ProgressBar. Required when title not used and there is not any label associated with the progress bar */
  'aria-label': z.string().optional().default('null'),
  /** Associates the ProgressBar with it's label for accessibility purposes. Required when title not used */
  'aria-labelledby': z.string().optional().default('null'),
  /** Classname for progress component. */
  className: z.string().optional().default(''),
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  helperText: z.custom<React.ReactNode>().optional(),
  /** DOM id for progress component. */
  id: z.string().optional().default(''),
  /** Indicate whether to truncate the string title */
  isTitleTruncated: z.boolean().optional().default(false),
  /** Text description of current progress value to display instead of percentage. */
  label: z.custom<React.ReactNode>().optional().default('null'),
  /** Maximum value of progress. */
  max: z.number().optional().default(100),
  /** Where the measure percent will be located. */
  measureLocation: z.enum(['outside', 'inside', 'top', 'none']).optional().default('ProgressMeasureLocation.top'),
  /** Minimal value of progress. */
  min: z.number().optional().default(0),
  /** Size variant of progress. */
  size: z.enum(['sm', 'md', 'lg']).optional().default('null'),
  /** Title above progress. The isTitleTruncated property will only affect string titles. Node title truncation must be handled manually. */
  title: z.custom<React.ReactNode>().optional().default(''),
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right']).optional().default('top'),
  /** Actual value of progress. */
  value: z.number().optional().default(0),
  /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
  valueText: z.string().optional().default('null'),
  /** Status variant of progress. */
  variant: z.enum(['danger', 'success', 'warning']).optional().default('null')
})

export type ProgressProps = z.infer<typeof ProgressSchema>
