// Auto-generated Zod schema for ProgressBarProps
import { z } from 'zod'

export const ProgressBarPropsSchema = z.object({
  /** What should be rendered inside progress bar. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes for Progres bar. */
  className: z.string().optional(),
  /** Minimal value of progress. */
  progressBarAriaProps: z.unknown().optional(),
  /** Actual progress value. */
  value: z.number()
})

export type ProgressBarPropsProps = z.infer<typeof ProgressBarPropsSchema>
