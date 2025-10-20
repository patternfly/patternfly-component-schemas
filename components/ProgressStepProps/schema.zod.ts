// Auto-generated Zod schema for ProgressStepProps
import { z } from 'zod'

export const ProgressStepPropsSchema = z.object({
  /** Content rendered inside the progress step. */
  children: z.custom<React.ReactNode>().optional(),
  /** Additional classes applied to the progress step container. */
  className: z.string().optional(),
  /** Description text of a progress step. */
  description: z.custom<React.ReactNode>().optional(),
  /** Custom icon of a progress step. Will override default icons provided by the variant. */
  icon: z.custom<React.ReactNode>().optional(),
  /** Flag indicating the progress step is the current step. */
  isCurrent: z.boolean().optional(),
  /** Forwards the step ref to rendered function.  Use this prop to add a popover to the step. */
  popoverRender: z.custom<React.ReactNode>().optional(),
  /** ID of the title of the progress step. */
  titleId: z.string().optional(),
  /** Accessible label for the progress step. Should communicate all information being communicated by the progress
step's icon, including the variant and the completed status. */
  'Unknown': z.string().optional(),
  /** Variant of the progress step. Each variant has a default icon. */
  variant: z.enum(['default', 'success', 'info', 'pending', 'warning', 'danger']).optional()
})

export type ProgressStepPropsProps = z.infer<typeof ProgressStepPropsSchema>
