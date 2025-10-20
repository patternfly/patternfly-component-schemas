// Auto-generated Zod schema for ProgressStepperProps
import { z } from 'zod'

export const ProgressStepperPropsSchema = z.object({
  /** Content rendered inside the progress stepper. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the progress stepper container. */
  className: z.string().optional(),
  /** Flag indicating the progress stepper should be centered. */
  isCenterAligned: z.boolean().optional(),
  /** Flag indicating the progress stepper should be rendered compactly. */
  isCompact: z.boolean().optional(),
  /** Flag indicating the progress stepper has a vertical layout. */
  isVertical: z.boolean().optional(),
  /** Adds an accessible label to the progress stepper. */
  'Unknown': z.string().optional()
})

export type ProgressStepperPropsProps = z.infer<typeof ProgressStepperPropsSchema>
