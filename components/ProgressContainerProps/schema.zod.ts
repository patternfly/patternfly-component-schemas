// Auto-generated Zod schema for ProgressContainerProps
import { z } from 'zod'

export const ProgressContainerPropsSchema = z.object({
  /** Content which can be used to convey additional information about the progress component.
We recommend the helper text component as it was designed for this purpose. */
  helperText: z.custom<React.ReactNode>().optional(),
  /** Whether string title should be truncated */
  isTitleTruncated: z.boolean().optional(),
  /** Label to indicate what progress is showing. */
  label: z.custom<React.ReactNode>().optional(),
  /** Location of progress value. */
  measureLocation: z.enum(['outside', 'inside', 'top', 'none']).optional(),
  /** Progress component DOM ID. */
  parentId: z.string(),
  /** Properties needed for aria support */
  progressBarAriaProps: z.unknown().optional(),
  /** Progress title. The isTitleTruncated property will only affect string titles. Node title truncation must be handled manually. */
  title: z.custom<React.ReactNode>().optional(),
  /** Position of the tooltip which is displayed if title is truncated */
  tooltipPosition: z.enum(['auto', 'top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end']).optional(),
  /** Actual progress value. */
  value: z.number(),
  /** Type of progress status. */
  variant: z.enum(['danger', 'success', 'warning']).optional()
})

export type ProgressContainerPropsProps = z.infer<typeof ProgressContainerPropsSchema>
