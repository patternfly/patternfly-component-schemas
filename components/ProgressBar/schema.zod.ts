// Auto-generated Zod schema for ProgressBar
// Generated on: 2025-10-16T19:25:27.755Z
import { z } from 'zod'

export const ProgressBarSchema = z.object({
  /** What should be rendered inside progress bar. */
  children: z.custom<React.ReactNode>().optional().default('null'),
  /** Additional classes for Progres bar. */
  className: z.string().optional().default(''),
  /** Minimal value of progress. */
  progressBarAriaProps: z.unknown().optional(),
  /** Actual progress value. */
  value: z.number()
})

export type ProgressBarProps = z.infer<typeof ProgressBarSchema>
