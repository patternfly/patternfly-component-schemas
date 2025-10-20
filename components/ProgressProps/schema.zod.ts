// Auto-generated Zod schema for ProgressProps
import { z } from 'zod'

export const ProgressPropsSchema = z.object({
  /** Classname for progress component. */
  className: z.string().optional(),
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  helperText: z.custom<React.ReactNode>().optional(),
  /** DOM id for progress component. */
  id: z.string().optional(),
  /** Indicate whether to truncate the string title */
  isTitleTruncated: z.boolean().optional(),
  /** Text description of current progress value to display instead of percentage. */
  label: z.custom<React.ReactNode>().optional(),
  /** Maximum value of progress. */
  max: z.number().optional(),
  /** Where the measure percent will be located. */
  measureLocation: z.enum(['outside', 'inside', 'top', 'none']).optional(),
  /** Minimal value of progress. */
  min: z.number().optional(),
  /** Size variant of progress. */
  size: z.enum(['sm', 'md', 'lg']).optional(),
  /** Title above progress. The isTitleTruncated property will only affect string titles. Node title truncation must be handled manually. */
  title: z.custom<React.ReactNode>().optional(),
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right']).optional(),
  /** Associates the ProgressBar with it's label for accessibility purposes. Required when title not used */
  'Unknown': z.string().optional(),
  /** Actual value of progress. */
  value: z.number().optional(),
  /** Accessible text description of current progress value, for when value is not a percentage. Use with label. */
  valueText: z.string().optional(),
  /** Status variant of progress. */
  variant: z.enum(['danger', 'success', 'warning']).optional()
})

export type ProgressPropsProps = z.infer<typeof ProgressPropsSchema>
