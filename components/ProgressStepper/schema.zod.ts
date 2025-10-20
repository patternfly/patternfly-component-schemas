// Auto-generated Zod schema for ProgressStepper
import { z } from 'zod'

export const ProgressStepperSchema = z.object({
  /** Adds an accessible label to the progress stepper. */
  'aria-label': z.string().optional(),
  /** Content rendered inside the progress stepper. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the progress stepper container. */
  className: z.string().optional(),
  /** Flag indicating the progress stepper should be centered. */
  isCenterAligned: z.boolean().optional(),
  /** Flag indicating the progress stepper should be rendered compactly. */
  isCompact: z.boolean().optional(),
  /** Flag indicating the progress stepper has a vertical layout. */
  isVertical: z.boolean().optional()
})

export type ProgressStepperProps = z.infer<typeof ProgressStepperSchema>
