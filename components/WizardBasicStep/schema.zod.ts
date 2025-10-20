// Auto-generated Zod schema for WizardBasicStep
import { z } from 'zod'

export const WizardBasicStepSchema = z.object({
  /** Content shown when the step's navigation item is selected. When treated as a parent step, only sub-step content will be shown. */
  component: z.custom<React.ReactElement>().optional(),
  /** Replaces the step's footer. The step's footer takes precedence over the wizard's footer. */
  footer: z.any().optional(),
  /** Unique identifier */
  id: z.any(),
  /** Order index of step (starts at 1) */
  index: z.number(),
  /** Flag to disable the step's navigation item */
  isDisabled: z.boolean().optional(),
  /** Flag to determine whether the step is hidden */
  isHidden: z.boolean().optional(),
  /** Flag to represent whether the step has been visited (navigated to) */
  isVisited: z.boolean().optional(),
  /** Name of the step's navigation item */
  name: z.custom<React.ReactNode>(),
  /** Replaces the step's navigation item or its properties. */
  navItem: z.unknown().optional(),
  /** Used to determine icon next to the step's navItem */
  status: z.enum(['default', 'error', 'success']).optional()
})

export type WizardBasicStepProps = z.infer<typeof WizardBasicStepSchema>
